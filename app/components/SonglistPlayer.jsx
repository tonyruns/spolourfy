import * as React from 'react';

const SonglistPlayer = props => {
  const { songList } = props;
  console.log("props");
  console.log(props);
  return (
    <iframe
      src={`https://embed.spotify.com/?uri=${songList.uri}`}
      width="300"
      height="380"
      frameBorder="0"
      allowTransparency="true"
    />
  );
}

export default SonglistPlayer;