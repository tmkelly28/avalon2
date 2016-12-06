'use strict';

import db from '../db';
import { defaultGame } from '../components/defaults';

// const START_GAME = 'START_GAME';
const ADD_PLAYER = 'ADD_PLAYER';
const DEFAULT_GAME = defaultGame;

export const addPlayer = (gameStats) => ({
  type: ADD_PLAYER,
  game: gameStats
});

export const createGame = user =>
  dispatch => {
    let newGameObj = {
      host: user,
      players: {}
    };
    newGameObj.players[user.id] = {
      displayName: user.displayName,
      email: user.email,
      host: true
    };
    const fullGame = Object.assign({}, DEFAULT_GAME, newGameObj);
    const newGameRef = db.ref('games').push(fullGame)	// store new game in db
    fullGame.id = newGameRef.key;	// use db key as state game's id
    return dispatch(addPlayer(fullGame));
  }

export const updateGame = (user, gameId) =>
  dispatch => {
    const newPlayer = {
      displayName: user.displayName,
      email: user.email
    };
    const playersRef = db.ref(`games/${gameId}/players`);

    playersRef.child(user.id).set(newPlayer)
    .then(() => {
      return db.ref(`games/${gameId}`).once('value')
    })
    .then(snapshot => {
      let updatedGame = snapshot.val();
      updatedGame.id = gameId;
      return dispatch(addPlayer(updatedGame))
    })
    .catch(err => console.error(err));
  }

export const startGame = (game) => {
  dispatch => {
    console.log('You started a game!')
    // will have to send a msg via firebase to change everyone's state to started (started: true???)
  }
}

export default (state = DEFAULT_GAME, action) => {
  switch (action.type) {
    // case START_GAME:
    // return Object.assign({}, state, action.stats);
    case ADD_PLAYER:
      return Object.assign({}, state, action.game);
    default: return state;
  }
}
