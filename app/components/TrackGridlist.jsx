import * as React from 'react';
import { connect } from 'react-redux';

import Track from './Track';
import colorsort from '../lib/colorsort';

const TrackGridlist = props => {
  const { colors, tracks } = props;
  const selector = item => item.track.album.images[0];
  const items = colorsort(colors, tracks.items, selector);
  return (
    <div className="TrackGridlist row">
      {items.map(item => {
        return (
          <div key={item.track.id} className="col-xs-6 col-sm-4 col-md-2 col-lg-1">
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
