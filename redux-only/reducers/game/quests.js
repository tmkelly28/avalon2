import store from '../../store';
import { combineReducers } from 'redux';
import { START_GAME, PROPOSE_TEAM, VOTE_ON_TEAM, VOTE_ON_QUEST, NEXT_QUEST } from '../../constants';

const DEFAULT_QUEST = {
  requiredPlayers: 0,   // === numberOfSuccessesNeeded
  numberOfFailsNeeded: 0,
  successVotes: 0,
  failVotes: 0,
  team: {
    successVotes: 0,
    failVotes: 0
  },
  isCurrentQuest: false
};

const DEFAULT_QUESTS = {
  1: DEFAULT_QUEST,
  2: DEFAULT_QUEST,
  3: DEFAULT_QUEST,
  4: DEFAULT_QUEST,
  5: DEFAULT_QUEST,
  currentQuest: 1
};

const five = [1, 2, 3, 4, 5];
const initializeQuests = ({ game: { rules: { numberOfPlayers } } }) => {
  const _QUESTS = { currentQuest: 1 };
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
        if (numberOfPlayers < 8) _QUESTS[i] = Object.assign({},
          DEFAULT_QUEST, {
          requiredPlayers: 3,
          numberOfFailsNeeded: 1
        });
        else _QUESTS[i] = Object.assign({}, DEFAULT_QUEST, {
          requiredPlayers: 4,
          numberOfFailsNeeded: 1
        });

      case 3:
        if (numberOfPlayers === 5) _QUESTS[i] = Object.assign({},
          DEFAULT_QUEST, {
          requiredPlayers: 2,
          numberOfFailsNeeded: 1
        });
        else if (numberOfPlayers === 6) _QUESTS[i] = Object.assign({},
          DEFAULT_QUEST, {
          requiredPlayers: 4,
          numberOfFailsNeeded: 1
        });
        else if (numberOfPlayers === 7) _QUESTS[i] = Object.assign({},
          DEFAULT_QUEST, {
          requiredPlayers: 3,
          numberOfFailsNeeded: 1
        });
        else _QUESTS[i] = Object.assign({}, DEFAULT_QUEST, {
          requiredPlayers: 4,
          numberOfFailsNeeded: 1
        });

      case 4:
        if (numberOfPlayers < 7) _QUESTS[i] = Object.assign({},
          DEFAULT_QUEST, {
          requiredPlayers: 3,
          numberOfFailsNeeded: 1
        });
        else if (numberOfPlayers === 7) _QUESTS[i] = Object.assign({},
          DEFAULT_QUEST, {
          requiredPlayers: 4,
          numberOfFailsNeeded: 2
        });
        else _QUESTS[i] = Object.assign({}, DEFAULT_QUEST, {
          requiredPlayers: 5,
          numberOfFailsNeeded: 2
        });

      case 5:
        if (numberOfPlayers === 5) _QUESTS[i] = Object.assign({},
          DEFAULT_QUEST, {
          requiredPlayers: 3,
          numberOfFailsNeeded: 1
        });
        else if (numberOfPlayers < 8) _QUESTS[i] = Object.assign({},
          DEFAULT_QUEST, {
          requiredPlayers: 4,
          numberOfFailsNeeded: 1
        });
        else _QUESTS[i] = Object.assign({}, DEFAULT_QUEST, {
          requiredPlayers: 5,
          numberOfFailsNeeded: 1
        });
    }
  });
  return _QUESTS;
};

export const proposeTeam = (team) => ({
  type: PROPOSE_TEAM,
  team
});

export const voteOnTeam = (voteType) => ({
  type: VOTE_ON_TEAM,
  voteType
});

export const voteOnQuest = (voteType) => ({
  type: VOTE_ON_QUEST,
  voteType
});

export const nextQuest = () => ({
  type: NEXT_QUEST
});

const teamReducer = (state = {}, action) => {
  switch (action.type) {
    case PROPOSE_TEAM: return Object.assign({}, state, {
      team: action.team
    });
    case VOTE_ON_TEAM: return Object.assign({}, state, {
      [action.voteType]: ++state[voteType]
    });

    // ADD_TO_TEAM (this can be kept on indiv's client side until team proposal)

    default: return state;
  }
}

// need to keep track of current quest and have questReducer know whch it is...?
// DEFAULT_CURRENT_QUEST??
// team approval? propose team?
const questReducer = (state = DEFAULT_QUEST, action) => {
  switch (action.type) {
    case VOTE_ON_QUEST: return Object.assign({}, state, {
      [action.voteType]: ++state[voteType]
    });
    // SCORE_QUEST (this can be taken care of with a FB listener)
    default: return state;
  }
};

const questsReducer = (state = DEFAULT_QUESTS, action) => {
  switch (action.type) {
    case START_GAME: return initializeQuests(store.getState());
    case NEXT_QUEST: return Object.assign({}, state, {
      currentQuest: ++state.currentQuest  // acct for end of game
    });

    // // questReducer?
    // case VOTE_ON_QUEST: return Object.assign({}, state[state.currentQuest], {
    //   [action.voteType]: ++
    // });

    default: return state;
  }
};

export default combineReducers({
  teamReducer,
  questReducer,
  questsReducer
});
