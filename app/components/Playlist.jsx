import './Playlist.scss';
import * as React from 'react';
import { connect } from 'react-redux';

import ColorImage from './ColorImage';

const getImageUrl = playlist => playlist.images.length ? playlist.images[0].url : null;

export class Playlist extends React.Component {
  render() {
    const { playlist, rgb } = this.props;
    const imageUrl = getImageUrl(playlist);
    return (
      <div className="Playlist">
        <ColorImage src={imageUrl} rgb={rgb} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const imageUrl = getImageUrl(ownProps.playlist);
  const colors = state.colors[imageUrl];
  const rgb = colors ? colors.rgb : null;
  return {
    rgb
  };
}

const PlaylistContainer = connect(mapStateToProps)(Playlist);
export default PlaylistContainer;
