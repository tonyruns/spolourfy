import * as React from 'react';

const PlaylistPlayer = props => {
  const { playlist } = props;
  return (
    <iframe
      src={`https://embed.spotify.com/?uri=spotify:user:${playlist.owner.id}:playlist:${playlist.id}`}
      width="300"
      height="380"
      frameBorder="0"
      allowTransparency="true"
    />
  );
}

export default PlaylistPlayer;