import * as React from 'react';
import { connect } from 'react-redux';

import ColorImage from './ColorImage';

const AlbumImage = props => {
  const { album } = props;
  const imageUrl = album.images[0].url;
  return <ColorImage src={imageUrl} />;
}
export default AlbumImage;
