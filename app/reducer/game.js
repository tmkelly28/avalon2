'use strict';

const START_GAME = 'START_GAME';
const ADD_PLAYER = 'ADD_PLAYER';
const DEFAULT = {};

import db from '../db';

export const startGame = (gameId, playerCount) => ({
	type: START_GAME,
	stats: {
		gameId,		// figure out how/where to generate this and pass it
		playerCount
	}
});

const generateGameId = () => {
	const length = 7,
		charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
	let gameId = '';
	for (let i = 0; i < length; i++) {
		gameId += charset.charAt(Math.floor(Math.random() * charset.length));
	}
	return gameId;
}

export const newGame = () => ({
	type: ADD_PLAYER,
	stats: {
		gameId: generateGameId(),
		playerCount: 1
	}
})

// have thunk middleware + regular reducer for this
// call db >> call joinGame to update state
export const joinGame = gameId =>
	// use gameId to get game from db, join, playerCount++

	({
		type: ADD_PLAYER,
		stats: {
			gameId,
			playerCount
		}
	});

export default (state = DEFAULT, action) => {
	switch (action.type) {
		case START_GAME: 	// ASK OMRI ABOUT THIS SYNTAX
			return Object.assign({}, state, action.stats);	// will likely have more state to deal with
		case ADD_PLAYER: 
			return Object.assign({}, state, action.stats);
		default: return state;
	}
}
