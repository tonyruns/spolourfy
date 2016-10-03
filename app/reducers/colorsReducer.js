import { COLOR_UPDATE_PLAYLISTS_SUCCESS, ALBUM_COLOURS_SUCCESS } from '../actions/colorActions';

/**
 * Color state shape: {
 *  [imageUrl: string]: {
 *    hsv: [h, s, v],
 *    rgb: [r, g, b],
 *    url: string
 *  }
 * }
 */
const initialState = {};

export default function reduce(state = initialState, action) {
  switch (action.type) {
    case COLOR_UPDATE_PLAYLISTS_SUCCESS:
    case ALBUM_COLOURS_SUCCESS:
      let colors = {};
      action.data.forEach(d => colors[d.url] = d);
      return Object.assign({}, state, colors);
    case ALBUM_COLOURS_SUCCESS:
      colors = action.data;
      return Object.assign({}, state, colors);
    default:
      return state;
  }
}
