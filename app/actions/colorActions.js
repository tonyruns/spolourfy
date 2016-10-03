export const COLOR_UPDATE_SUCCESS = 'COLOR_UPDATE_SUCCESS';
export const ALBUM_COLOURS_SUCCESS = 'ALBUM_COLOURS_SUCCESS';

function post(url, body) {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(body => body.json());
}

function getColor(url) {
  return post('/api/imagecolor', url);
}

function getColors(urls) {
  return post('/api/imagecolors', urls);
}

function getPlaylistImageUrls(playlists) {
  return playlists.items.map(item => item.images[0]).filter(image => image).map(image => image.url);
}

export function getAlbumColours() {
  return (dispatch, getState) => {
    const { colors, albums } = getState();
    const existingUrls = Object.keys(colors);
    console.log(albums);
    const newUrls = albums.albums.items.map(item => item.track.album.images[1]).filter(image => image).map(image => image.url);

    if (newUrls.length == 0)
      return;

    return getColors(newUrls)
      .then(data => {
        dispatch({ type: ALBUM_COLOURS_SUCCESS, data });
        return data;
      });
  };
}
function getPlaylistTracksImageUrls(playlist) {
  const trackItems = playlist.tracks.items;
  return trackItems.map(item => item.track.album.images[0]).filter(image => image).map(image => image.url);
}

function updateColors(dispatch, getState, urls) {
  const { colors } = getState();
  const newUrls = _.difference(urls, Object.keys(colors));
  if (newUrls.length == 0)
      return;

    return getColors(newUrls)
      .then(data => {
        dispatch({ type: COLOR_UPDATE_SUCCESS, data });
        return data;
      });
}

export function updatePlaylistColors() {
  return (dispatch, getState) => {
    const { playlists } = getState();
    return updateColors(dispatch, getState, getPlaylistImageUrls(playlists));
  };
}

export function updatePlaylistTracksColors(playlistId) {
  return (dispatch, getState) => {
    const { playlists } = getState();
    const playlist = _.find(playlists.items, p => p.id == playlistId);
    return updateColors(dispatch, getState, getPlaylistTracksImageUrls(playlist));
  }
}
