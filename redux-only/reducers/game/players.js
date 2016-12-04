import { ADD_PLAYER  } from '../../constants';

export const addPlayer = player => ({
  type: ADD_PLAYER,
  player
});

const DEFAULT_PLAYERS = {};
const DEFAULT_PLAYER = {
  loyal: true,
  character: ''
};

export default function (state = DEFAULT_PLAYERS, action) {
  switch (action.type) {
    case ADD_PLAYER: return Object.assign({}, state, {
      [action.player.id]: Object.assign({}, action.player, DEFAULT_PLAYER)
    });
    default: return state;
  }
}