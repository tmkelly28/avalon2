import playersReducer from './players';
import rulesReducer from './rules';

import { JOIN_GAME } from '../../constants';

export const joinGame = game => ({
  type: JOIN_GAME,
  game
});

const DEFAULT = {};
export default function (state = DEFAULT, action) {
  switch (action.type) {
    case JOIN_GAME: return action.game;
    default: 
      const players = playersReducer(state.players, action);
      const rules = rulesReducer(state.rules, action);
      return Object.assign({}, state, { players, rules });
  }
}
