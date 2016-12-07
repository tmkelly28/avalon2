import { hashHistory } from 'react-router';
import _ from 'lodash';
import db from '../../../db';
import { UPDATE_GAME } from '../../constants';
import initializeQuests from './questHelper';
import assignCharacters from './charactersHelper';

export const createGame = user => dispatch => {
  const hostId = user.id;
  const ref = db.ref('games').push();
  const key = ref.key;
  ref.set({
    hostId,
    status: 'PREGAME', // enum: PREGAME, TEAMMAKE, TEAMVOTE, QUESTVOTE, GUESSMERLIN, ENDGAME
    // mordred: false,
    // morgana: false,
    // percival: false,
    // oberon: false,
    currentQuest: 1,
    currentTurn: 0,
    gameId: key,
    approves: 0,
    rejects: 0,
    succeedCards: 0,
    failCards: 0,
    goodScore: 0,
    evilScore: 0,
    rejectCounter: 0,
    proposedTeam: '', // comma delimited playerIds
    turnOrder: '',    // comma delimited playerIds
    merlinGuess: ''
  });
  dispatch(joinGame(user, key));
  hashHistory.push(`rooms/${key}`);
};

export const joinGame = (user, gameId) => () => {
  const ref = db.ref(`games/${gameId}/players`).push();
  const key = ref.key;
  ref.set({
    userId: user.id,
    playerId: key,
    email: user.email,
    loyalty: '',
    character: ''
  });
  hashHistory.push(`rooms/${gameId}`);
};

export const startGame = () => (dispatch, getState) => {

  const {
    game: {
      players,
      gameId
    }
  } = getState();

  const playerIds = _.keys(players);
  const numPlayers = _.values(players).length;
  const turnOrder = _.shuffle(playerIds).join(',');

  const [
    quest1,
    quest2,
    quest3,
    quest4,
    quest5
  ]= initializeQuests(numPlayers);

  const characters = assignCharacters(playerIds);

  db.ref(`games/${gameId}`).update({
    status: 'PREQUEST',
    turnOrder,
    quest1,
    quest2,
    quest3,
    quest4,
    quest5
  });

  characters.forEach(character =>
    db.ref(`games/${gameId}/players/${character.playerId}`).update(character));
};

export const updateGame = gameFromFirebase => {

  const game = Object.assign({}, gameFromFirebase);

  // transform to array
  game.players = _.values(game.players);
  // transform from comma delimited string to array
  game.proposedTeam = !game.proposedTeam ? [] : game.proposedTeam.split(',');
  // transform from comma delimited string to array
  game.turnOrder = !game.proposedTeam ? [] : game.turnOrder.split(',');

  return {
    type: UPDATE_GAME,
    game
  };
}

const DEFAULT_GAME = {};

export default function (state = DEFAULT_GAME, action) {
  switch (action.type) {
    case UPDATE_GAME: return Object.assign({}, state, action.game);
    default: return state;
  }
}
