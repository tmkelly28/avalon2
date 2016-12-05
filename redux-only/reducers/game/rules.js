import { combineReducers } from 'redux';
import { ADD_PLAYER_TO_GAME, TOGGLE_OPTIONAL } from '../../constants';

const DEFAULT_CHARACTERS = {
  mordred: false,
  percival: false,
  morgana: false,
  oberon: false,
  ladyOfTheLake: false
};

export const toggleOptional = character => ({
  type: TOGGLE_OPTIONAL,
  character
});

// numberOfPlayers Reducer
const numberOfPlayers = (state = 0, action) => {
  switch (action.type) {
    case ADD_PLAYER_TO_GAME: return ++state;
    default: return state;
  }
};
 
// characters Reducer
const characters = (state = DEFAULT_CHARACTERS, action) => {
  switch (action.type) {
    case TOGGLE_OPTIONAL: return Object.assign({}, state, {
      [action.character]: !state[action.character]
    });
    default: return state;
  }
};

export default combineReducers({
  numberOfPlayers,
  characters
});
