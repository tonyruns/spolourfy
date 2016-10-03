import * as React from 'react';

import AlbumImage from './AlbumImage';

export default class Track extends React.Component {
  render() {
    const { track } = this.props;
    return (
      <div className="Track">
        <AlbumImage album={track.album} />
      </div>
    );
  }
}
