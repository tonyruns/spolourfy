import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMyInfo, getMySavedAlbums } from '../actions/spotifyActions';

/**
 * Our user page
 * Displays the user's information
 */
class User extends Component {
  /** When we mount, get the tokens from react-router and initiate loading the info */
  componentDidMount() {
    // params injected via react-router, dispatch injected via connect
    const {dispatch, params} = this.props;
    dispatch(getMyInfo());
    dispatch(getMySavedAlbums());
  }

  /** Render the user's info */
  render() {
    console.log(this.props);
    const { user, albums } = this.props;
    const { loading, display_name, images, id, email, external_urls, href, country, product } = user;
    const { items } = albums;
    console.log(":)", items);
    console.log(":*()", albums);

    const imageUrl = images[0] ? images[0].url : "";
    // Indicate we're still loading
    if (loading) {
      return <h2>Loading...</h2>;
    }

    return (
      <div className="album">
        <h2>{`Logged in as ${display_name}`}</h2>
        <div className="album-content">
          { items.map(album => <img key={album.album.id} src={album.album.images[0].url} /> ) }
        </div>
      </div>
    );
  }
}

export default connect(state => state.user)(User);
