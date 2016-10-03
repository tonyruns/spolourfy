import * as React from 'react';

import { connect } from 'react-redux';

import Playlist from './Playlist';

function colorSort(colors, p1, p2) {
  const [c1, c2] = [colors[p1.images[0].url], colors[p2.images[0].url]];
  return ((c1 || {}).hsv || [0])[0] - ((c2 || {}).hsv || [0])[0];
}

const PlaylistGridlist = props => {
  const { colors, playlists } = props;
  const items = playlists.items.filter(playlist => playlist.images[0]).sort((p1, p2) => colorSort(colors, p1, p2));
  return (
    <div className="PlaylistGridlist">
      {items.map(playlist => {
        return (
          <div key={playlist.id}>
            <Playlist playlist={playlist} />
          </div>
        )
      })}
    </div>
  );
}

const PlaylistGridlistContainer = connect(
  state => {
    return {
      playlists: state.playlists,
      colors: state.colors
    }
  }
)(PlaylistGridlist);

export default PlaylistGridlistContainer;