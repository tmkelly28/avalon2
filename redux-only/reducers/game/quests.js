import store from '../../store';
import { combineReducers } from 'redux';
import { START_GAME, PROPOSE_TEAM, VOTE_ON_TEAM, VOTE_ON_QUEST, SCORE_AND_END_QUEST } from '../../constants';


// -------------------------- DEFAULTS --------------------------
const DEFAULT_QUEST = {
  requiredPlayers: 0,   // === numberOfSuccessesNeeded
  numberOfFailsNeeded: 0,
  successVotes: 0,
  failVotes: 0,
  team: {
    successVotes: 0,
    failVotes: 0
  }
};

const DEFAULT_QUESTS = {
  1: DEFAULT_QUEST,
  2: DEFAULT_QUEST,
  3: DEFAULT_QUEST,
  4: DEFAULT_QUEST,
  5: DEFAULT_QUEST,
  currentQuest: 1,
  loyalScore: 0,
  evilScore: 0
};

// -------------------------- HELPERS --------------------------
const five = [1, 2, 3, 4, 5];
const initializeQuests = ({ game: { rules: { numberOfPlayers } } }) => {
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

  return Object.assign({}, DEFAULT_QUESTS, _QUESTS);
};

function addVoteToQuests ({ game: { quests }}, voteType) {
  const _QUESTS = Object.assign({}, quests);
  const _QNUMBER = _QUESTS.currentQuest;
  const _CURQUEST = _QUESTS[_QNUMBER];
  const fieldToUpdate = voteType ? 'successVotes' : 'failVotes';
  _QUESTS[_QNUMBER] = Object.assign({}, _CURQUEST, {
    [fieldToUpdate]: ++_CURQUEST[fieldToUpdate]
  });

  return _QUESTS;
};

function tallyQuestAndContinue ({ game: { quests }}) {
  const _QUESTS = Object.assign({}, quests);
  const _QNUMBER = _QUESTS.currentQuest;
  const _CURQUEST = _QUESTS[_QNUMBER];

  const didSucceed = _CURQUEST.failVotes < _CURQUEST.numberOfFailsNeeded;
  const gameScoreToUpdate = didSucceed ? 'loyalScore' : 'evilScore';

  _QUESTS[gameScoreToUpdate] = ++_QUESTS[gameScoreToUpdate];
  _QUESTS.currentQuest = ++_QUESTS.currentQuest;

  _QUESTS[_QNUMBER] = Object.assign({}, _CURQUEST, {
    didSucceed
  });

  return _QUESTS;
};

// -------------------------- ACTIONS --------------------------
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

// run this dispatch on frontend using fb listener to tally total vote count
export const scoreAndEndQuest = () => ({
  type: SCORE_AND_END_QUEST
});

// team approval? propose team?
// const teamReducer = (state = {}, action) => {
//   switch (action.type) {
//     case PROPOSE_TEAM: return Object.assign({}, state, {
//       team: action.team
//     });
//     case VOTE_ON_TEAM: return Object.assign({}, state, {
//       [action.voteType]: ++state[voteType]
//     });

//     // ADD_TO_TEAM (this can be kept on indiv's client side until team proposal)

//     default: return state;
//   }
// };


// -------------------------- REDUCER --------------------------
export default (state = DEFAULT_QUESTS, action) => {
  switch (action.type) {
    // All quests
    case START_GAME: return initializeQuests(store.getState());

    // Current quest
    case VOTE_ON_QUEST: return addVoteToQuests(store.getState(), action.voteType);
    case SCORE_AND_END_QUEST: return tallyQuestAndContinue(store.getState());

    // Current quest team

    default: return state;
  }
};
