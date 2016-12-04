import store from '../../store';
import { START_GAME } from '../../constants';

const DEFAULT_QUESTS = {
  1: DEFAULT_QUEST,
  2: DEFAULT_QUEST,
  3: DEFAULT_QUEST,
  4: DEFAULT_QUEST,
  5: DEFAULT_QUEST
};

const DEFAULT_QUEST = {
  requiredPlayers: 0,
  numberOfFailsNeeded: 0,
  actualSuccesses: 0,
  actualFails: 0
};

const five = [1, 2, 3, 4, 5];
function initializeQuests ({ game: {rules: { numberOfPlayers } } }) {
  const _QUESTS = {};
  five.map(i => {
    switch (i) { // switch on quest number
      case 1:
        if (numberOfPlayers < 8) _QUESTS[i] = Object.assign({}, DEFAULT_QUEST, {
          requiredPlayers: 2,
          numberOfFailsNeeded: 1
        });
        else _QUESTS[i] = Object.assign({}, DEFAULT_QUEST, {
          requiredPlayers: 3,
          numberOfFailsNeeded: 1
        });
      
      case 2:
      case 3:
      case 4:
      case 5:
    }
  });

  return _QUESTS;
}

function questReducer (state = DEFAULT_QUEST, action) {
  switch (action.type) {
    default: return state;
  }
}

export default function questsReducer (state = DEFAULT_QUESTS, action) {
  switch (action.type) {
    case START_GAME: return initializeQuests(store.getState());
    default: return state;
  }
}