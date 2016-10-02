import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setTokens, getMySavedAlbums } from '../actions/Actions.js';

/**
 * Our user page
 * Displays the user's information
 */
class User extends Component {
  /** When we mount, get the tokens from react-router and initiate loading the info */
  componentDidMount() {
    // params injected via react-router, dispatch injected via connect
    const {dispatch, params} = this.props;
    const {accessToken, refreshToken} = params;
    dispatch(setTokens({accessToken, refreshToken}));
    dispatch(getMySavedAlbums(25, 0));
  }

  /** Render the user's info */
  render() {
    const { accessToken, refreshToken, albums } = this.props;
    const { loading, items } = albums;

    // Indicate we're still loading
    if (loading) {
      return <h2>Loading...</h2>;
    }

    return (
      <div className="albums">
        {items.map(album => {
          return <img key={album.album.id} src={album.album.images[1].url}/>;
        })}
      </div>
    );
  }
}

export default connect(state => state.reducer)(User);
