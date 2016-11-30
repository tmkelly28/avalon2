'use strict';

// const START_GAME = 'START_GAME';
const ADD_PLAYER = 'ADD_PLAYER';
const DEFAULT_GAME = {
	key: '',
	host: '',
	players: [],
	questNum: 0,
	questFailVotes: 0,
	successes: 0,
	failures: 0,
	loyal: '',
	minion: '',
	merlin: '',
	percival: '',
	mordred: '',
	morgana: '',
	oberon: '',
	assassin: '',
	guessedMerlin: ''
};

import db from '../db';

export const addPlayer = (gameStats) => ({
	type: ADD_PLAYER,
	stats: {
		game: gameStats
	}
});

// export const joinGame = (gameId, players) => ({
// 	type: ADD_PLAYER,
// 	stats: {
// 		gameId
// 	}
// });

// export const startGame = (gameId) => ({
// 	type: START_GAME,
// 	stats: {
// 		game: {
// 			gameId
// 		}
// 	}
// });

// const generateGameId = () => {
// 	const length = 7,
// 		charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
// 	let gameId = '';
// 	for (let i = 0; i < length; i++) {
// 		gameId += charset.charAt(Math.floor(Math.random() * charset.length));
// 	}
// 	return gameId;
// };

// create new game instance in db
export const createGame = user => 
	dispatch => {
		const newGameObj = {
			host: user,
			players: [user]
		};
		db.ref('games').push(Object.assign({}, DEFAULT_GAME, newGameObj))
		.then(newGameRef => {
			dispatch(addPlayer(newGameRef));
		})
		.catch(err => console.error(err));
	}

export const updateGame = (user, gameId) =>
	dispatch => {
		db.ref(`games/${gameId}`).on('value', snapshot => {
			snapshot.update({
				players: snapshot.players.push(user)
			})
			.then(updatedGame => {
				dispatch(addPlayer(updatedGame))
			})
			.catch(err => console.error(err));
		})
	}

export default (state = DEFAULT_GAME, action) => {
	switch (action.type) {
		// case START_GAME:
		// 	return Object.assign({}, state, action.stats);
		case ADD_PLAYER: 
			return Object.assign({}, state, action.stats);
		default: return state;
	}
}
