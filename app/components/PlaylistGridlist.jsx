import * as React from 'react';

import Playlist from './Playlist';

const PlaylistGridlist = props => {
  const { playlists } = props;
  return (
    <div className="PlaylistGridlist row">
      {playlists.items.map(playlist => {
        return (
          <div key={playlist.id} className="col-xs-2">
            <Playlist playlist={playlist} />
          </div>
        )
      })}
    </div>
  );
}

export default PlaylistGridlist;