export const SPOTIFY_PLAYER_CHANGE = 'SPOTIFY_PLAYER_CHANGE';

export function changeSong(uri) {
	return {
		type: SPOTIFY_PLAYER_CHANGE,
		uri
	};
}