import * as React from 'react';
import { connect } from 'react-redux';

import Track from './Track';

function colorSort(colors, p1, p2) {
  const [c1, c2] = [colors[p1.track.album.images[0].url], colors[p2.track.album.images[0].url]];
  return ((c1 || {}).hsv || [0])[0] - ((c2 || {}).hsv || [0])[0];
}

const TrackGridlist = props => {
  const { colors, tracks } = props;
  const items = tracks.items.filter(item => item.track.album.images[0]).sort((p1, p2) => colorSort(colors, p1, p2));
  return (
    <div className="TrackGridlist row">
      {items.map(item => {
        return (
          <div key={item.track.id} className="col-xs-2 col-lg-1">
            <Track track={item.track} />
          </div>
        )
      })}
    </div>
  );
}

const TrackGridlistContainer = connect(
  state => {
    return {
      colors: state.colors
    };
  }
)(TrackGridlist);
export default TrackGridlistContainer;
