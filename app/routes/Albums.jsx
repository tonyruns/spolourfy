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
    const { albums, colors } = this.props;
    const { loading, items } = albums;

    // Indicate we're still loading
    if (loading) {
      return <h2>Loading...</h2>;
    }

    return (
      <div className="albums">
        { Object.keys(colors).map(colour => (
            <div key={colour}>
                <img src={colors[colour].url} style={{width: 100, height: 100}} />
                <div style={{width: 100, height: 100, backgroundColor: `rgb(${colors[colour].rgb[0]}, ${colors[colour].rgb[1]}, ${colors[colour].rgb[2]})`}} />
            </div>
        )) }
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
