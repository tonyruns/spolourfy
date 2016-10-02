import * as React from 'react';

import ColorImage from './ColorImage';

export default class Track extends React.Component {
  render() {
    const { track } = this.props;
    console.log(track);
    const imageUrl = track.album.images[0].url;
    return (
      <div className="Track">
        {track.name}
        <ColorImage src={imageUrl} />
      </div>
    );
  }
}
