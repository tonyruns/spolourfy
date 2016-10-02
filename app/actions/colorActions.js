export const COLOR_UPDATE_PLAYLISTS_SUCCESS = 'COLOR_UPDATE_PLAYLISTS_SUCCESS';

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

export function updatePlaylistColors() {
  return (dispatch, getState) => {
    const { colors, playlists } = getState();
    const existingUrls = Object.keys(colors);
    const newUrls = playlists.items.map(item => item.images[0]).filter(image => image).map(image => image.url);

    if (newUrls.length == 0)
      return;

    return getColors(newUrls)
      .then(data => {
        dispatch({ type: COLOR_UPDATE_PLAYLISTS_SUCCESS, data });
        return data;
      });
  };
}