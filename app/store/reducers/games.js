import { RECEIVE_GAMES } from '../constants';

export const receiveGames = games => ({
  type: RECEIVE_GAMES,
  games
});

const DEFAULT  = {};
export default function (state = DEFAULT, action) {
  switch (action.type) {
    case RECEIVE_GAMES: return action.games;
    default: return state;
  }
}