import _ from 'lodash';
import { UPDATE_GAME, DEFAULT_GAME } from '../../constants';

export const updateGame = gameFromFirebase => {
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

export { default as createGame } from './thunks/createGame';
export { default as joinGame } from './thunks/joinGame';
export { default as removeFromQuest } from './thunks/removeFromQuest';
export { default as startGame } from './thunks/startGame';
export { default as takeOnQuest } from './thunks/takeOnQuest';

export default function (state = DEFAULT_GAME, action) {
  switch (action.type) {
    case UPDATE_GAME: return Object.assign({}, state, action.game);
    default: return state;
  }
}
