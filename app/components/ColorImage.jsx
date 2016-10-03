import './ColorImage.scss';

import * as React from 'react';
import { connect } from 'react-redux';
import * as lodash from 'lodash';

/**
 * Image with color overlay. Takes in rgb array and src.
 */
const ColorImage = props => {
  const { rgb, src } = props;
  const other = _.omit(props, 'rgb', 'src', 'dispatch');

  let overlay = null;
  if (rgb) {
    const overlayStyle = {
      backgroundColor: `rgba(${rgb.join(', ')}, 0.7)`
    };
    overlay = <div className="ColorImage-overlay" style={overlayStyle} />;
  }

  return (
    <div className="ColorImage" {...other}>
      {overlay}
      <img className="ColorImage-image" src={src} />
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    rgb: (state.colors[ownProps.src] || {}).rgb
  };
}

const ColorImageContainer = connect(mapStateToProps)(ColorImage);
export default ColorImageContainer;