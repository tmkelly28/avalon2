import { combineReducers } from 'redux';
import store from '../../store';
import { ADD_PLAYER_TO_GAME, TOGGLE_OPTIONAL, INITIALIZE_LADY } from '../../constants';


// -------------------------- DEFAULTS --------------------------
const DEFAULT_CHARACTERS = {
  mordred: false,
  percival: false,
  morgana: false,
  oberon: false,
  ladyOfTheLake: {}
};

// -------------------------- HELPERS --------------------------
function setFirstLady ({ game }, characters) {
  const _CHARACTERS = characters;
  const playerIds = Object.keys(game.players);
  const lastPlayerId = playerIds[playerIds.length - 1];
  const firstLady = game.players[lastPlayerId];

  _CHARACTERS.ladyOfTheLake = Object.assign({}, firstLady)

  return _CHARACTERS; // async messes up players having roles at this point
};

// ---------------------- ACTION CREATORS ----------------------
export const toggleOptional = character => ({
  type: TOGGLE_OPTIONAL,
  character
});

export const intializeLady = () => ({
  type: INITIALIZE_LADY
});

// -------------------------- REDUCERS --------------------------
const numberOfPlayers = (state = 0, action) => {
  switch (action.type) {
    case ADD_PLAYER_TO_GAME: return ++state;
    default: return state;
  }
};

const characters = (state = DEFAULT_CHARACTERS, action) => {
  switch (action.type) {
    case INITIALIZE_LADY: return setFirstLady(store.getState(), state);
    case TOGGLE_OPTIONAL: return Object.assign({}, state, {
      [action.character]: !state[action.character]
    });
    // case PLAY_LADY_CARD:
    default: return state;
  }
};

export default combineReducers({
  numberOfPlayers,
  characters
});
