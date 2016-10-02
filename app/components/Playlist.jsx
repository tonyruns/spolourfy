import './Playlist.scss';
import * as React from 'react';

const imagePlaceholder = <div className="Playlist-image Playlist-image-placeholder" />;

export default class Playlist extends React.Component {
  render() {
    const { playlist } = this.props;
    const imageUrl = playlist.images.length ? playlist.images[0].url : null;
    return (
      <div className="Playlist">
        {imageUrl ? <img className="Playlist-image" src={imageUrl} /> : imagePlaceholder}
      </div>
    );
  }
}