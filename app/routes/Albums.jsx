import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMySavedAlbums } from '../actions/spotifyActions';
import { getAlbumColours } from '../actions/colorActions';

/**
 * Our user page
 * Displays the user's information
 */
class Albums extends Component {
  /** When we mount, get the tokens from react-router and initiate loading the info */
  componentDidMount() {
    // Get saved albums with the limit and offset
    this.props.onGetSavedAlbums(25, 0);
  }

  /** Render the user's info */
  render() {
    const { albums } = this.props;
    const { loading, items } = albums;

    let colors = this.props.colors;

    // Indicate we're still loading
    if (loading) {
      return <h2>Loading...</h2>;
    }

    colors = _.sortBy(colors, 'hsv[0]');

    return (
      <div className="albums">
        { Object.keys(colors).map(colour => <img key={colour} src={colors[colour].url} />) }
      </div>
    );
  }
}

const AlbumsContainer = connect(
  state => {
    return {
      albums: state.albums.albums,
      colors: state.colors
    }
  },
  dispatch => {
    return {
      onGetSavedAlbums: (limit, offset) => {
        dispatch(getMySavedAlbums(limit, offset))
        .then(() => {
            dispatch(getAlbumColours());
        });
      }
    };
  }
)(Albums);
export default AlbumsContainer;
