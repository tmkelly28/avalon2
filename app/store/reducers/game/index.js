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
    currentQuest: 0,
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

  console.log('here we go, starting a game')
  console.log('players', players)
  const playerIds = players.map(player => player.playerId);
  console.log('playerIds', playerIds)
  const numPlayers = _.values(players).length;
  console.log('numPlayers', numPlayers)
  const turnOrder = _.shuffle(playerIds).join(',');
  console.log(turnOrder)

  const [
    quest1,
    quest2,
    quest3,
    quest4,
    quest5
  ]= initializeQuests(numPlayers);

  const characters = assignCharacters(playerIds);

  db.ref(`games/${gameId}`).update({
    status: 'TEAMMAKE',
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
  console.log('from firebase: ', gameFromFirebase);
  console.log(gameFromFirebase.turnOrder);
  const game = Object.assign({}, gameFromFirebase);

  // transform to array
  game.players = _.values(game.players);
  // transform from comma delimited string to array
  game.proposedTeam = !game.proposedTeam ? [] : game.proposedTeam.split(',');
  // transform from comma delimited string to array
  game.turnOrder = !game.turnOrder ? [] : game.turnOrder.split(',');
  // transform each quest into quests array
  game.quests = [ game.quest1, game.quest2, game.quest3, game.quest4, game.quest5 ];
  delete game.quest1;
  delete game.quest2;
  delete game.quest3;
  delete game.quest4;
  delete game.quest5;

  return {
    type: UPDATE_GAME,
    game
  };
}

export const takeOnQuest = playerId => (dispatch, getState) => {
  const { game: { gameId, proposedTeam } } = getState();

  // sanity checking
  if (_.includes(proposedTeam, playerId))
    throw new Error('Duplicate team member');

  let newTeam = [...proposedTeam, playerId];
  newTeam = newTeam.join(',');
  db.ref(`games/${gameId}`).update({ proposedTeam: newTeam });
}

export const removeFromQuest= playerId => (dispatch, getState) => {
  const { game: { gameId, proposedTeam } } = getState();

  // sanity checking
  if (!_.includes(proposedTeam, playerId))
    throw new Error('Is not even on the team!');

  let newTeam = proposedTeam.filter(id => id !== playerId);
  newTeam = newTeam.join(',');
  db.ref(`games/${gameId}`).update({ proposedTeam: newTeam });
}

const DEFAULT_GAME = {
  hostId: '',
  status: '', // enum: PREGAME, TEAMMAKE, TEAMVOTE, QUESTVOTE, GUESSMERLIN, ENDGAME
  // mordred: false,
  // morgana: false,
  // percival: false,
  // oberon: false,
  currentQuest: 0, // idx in quests array
  currentTurn: 0,  // idx in turnOrder array
  gameId: '',
  approves: 0,
  rejects: 0,
  succeedCards: 0,
  failCards: 0,
  goodScore: 0,
  evilScore: 0,
  rejectCounter: 0,
  proposedTeam: '', // comma delimited playerIds
  turnOrder: '',    // comma delimited playerIds
  merlinGuess: '',
  players: [],
  quests: [{}, {}, {}, {}, {}]
};

export default function (state = DEFAULT_GAME, action) {
  switch (action.type) {
    case UPDATE_GAME: return Object.assign({}, state, action.game);
    default: return state;
  }
}
