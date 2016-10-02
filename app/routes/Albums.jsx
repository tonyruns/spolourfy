import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMySavedAlbums } from '../actions/spotifyActions';
import { changeSong } from '../actions/playerActions';
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

  onClick(uri){
    this.props.onAlbumClick(uri);
  }

  render() {
    const { albums } = this.props;
    const { loading, items } = albums;

    // Indicate we're still loading
    if (loading) {
      return <h2>Loading...</h2>;
    }

    return (
      <div className="albums">
          { items.map(album => <img onClick ={()=>this.onClick(album.album.uri)} key={album.album.id} src={album.album.images[1].url} /> ) }
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
      onAlbumClick: (uri) => {
        dispatch(changeSong(uri));
      },
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
