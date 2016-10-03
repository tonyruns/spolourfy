import * as React from 'react';
import { connect } from 'react-redux';

import TrackGridlist from './TrackGridlist';

const AlbumGridlistContainer = connect(
  state => {
    return {
      tracks: state.albums
    };
  }
)(TrackGridlist);
export default AlbumGridlistContainer;
