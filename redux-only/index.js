import store from './store';

/** Dummy zone  */
import { receiveGames } from './reducers/games';
import { joinGame } from './reducers/game';
import { toggleOptional } from './reducers/game/rules';
import { addPlayer } from './reducers/game/players';
/** End dummy zone */


window.store = store;

console.log('hello avalon');

const DUMMY_GAMES = {
  1: {
    id: 1,
    name: "Tom's Game",
    hostId: 1,
    quests: {
      1: {
        numberOfPlayers: 0,
        numberOfSuccessesNeeded: 0,
        numberOfFailssNeeded: 0,
        actualSuccesses: 0,
        actualFails: 0
      },
      2: {
        numberOfPlayers: 0,
        numberOfSuccessesNeeded: 0,
        numberOfFailssNeeded: 0,
        actualSuccesses: 0,
        actualFails: 0
      },
      3: {
        numberOfPlayers: 0,
        numberOfSuccessesNeeded: 0,
        numberOfFailssNeeded: 0,
        actualSuccesses: 0,
        actualFails: 0

      },
      4: {
        numberOfPlayers: 0,
        numberOfSuccessesNeeded: 0,
        numberOfFailssNeeded: 0,
        actualSuccesses: 0,
        actualFails: 0

      },
      5: {
        numberOfPlayers: 0,
        numberOfSuccessesNeeded: 0,
        numberOfFailssNeeded: 0,
        actualSuccesses: 0,
        actualFails: 0
      }
    }
  },
   2: {
    id: 2,
    name: "Dani's Game",
    players: {}
  }
};

const DUMMY_USERS = {
  1: {
    id: 1,
    name: 'Dani'
  },
  2: {
    id: 2,
    name: 'Tom'
  },
  3: {
    id: 3,
    name: 'Omri'
  },
  4: {
    id: 4,
    name: 'Eliot'
  },
  5: {
    id: 5,
    name: 'Geoff'
  }
};

const DUMMY_GAME = DUMMY_GAMES[1];

store.dispatch(receiveGames(DUMMY_GAMES));
store.dispatch(joinGame(DUMMY_GAME));
for (let i = 1; i <= 5; i++)
  store.dispatch(addPlayer(DUMMY_USERS[i]));
store.dispatch(toggleOptional('mordred'));


store.dispatch({ type: 'START_GAME' });
