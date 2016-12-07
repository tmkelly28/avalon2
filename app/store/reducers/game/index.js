import { hashHistory } from 'react-router';
import db from '../../../db';
import { UPDATE_GAME } from '../../constants';

export const createGame = user => dispatch => {
  const hostId = user.id;
  const ref = db.ref('games').push();
  const key = ref.key;
  ref.set({ hostId });
  dispatch(joinGame(user, key));
  hashHistory.push(`rooms/${key}`);
};

export const joinGame = (user, gameId) => () => {
  const ref = db.ref(`games/${gameId}/players`).push();
  const key = ref.key;
  ref.set({
    id: user.id,
    email: user.email,
    loyalty: '',
    character: ''
  });
};

export const updateGame = game => ({ type: UPDATE_GAME, game });

const DEFAULT_GAME = {};

export default function (state = DEFAULT_GAME, action) {
  switch (action.type) {
    case UPDATE_GAME: return Object.assign({}, state, action.game);
    default: return state;
  }
}
