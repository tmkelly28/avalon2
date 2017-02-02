import { connect } from 'react-redux';
import CommandsLocal from './Commands.local';
import { startGame, proposeTeam, approveTeam, rejectTeam } from '../../store/reducers/game';

export default connect(
  ({
    user,
    game: {
      hostId,
      players,
      status,
      gameId,
      turnOrder,
      currentTurn,
      proposedTeam,
      quests,
      currentQuest
    }
  }) => ({
    user,
    hostId,
    players,
    status,
    gameId,
    turnOrder,
    currentTurn,
    proposedTeam,
    quests,
    currentQuest
  }),
  dispatch => ({
    startGame: (numPlayers, gameId) =>
      dispatch(startGame(numPlayers, gameId)),
    handleProposeTeam: () =>
      dispatch(proposeTeam()),
    handleApproveTeam: () =>
      dispatch(approveTeam()),
    handleRejectTeam: () =>
      dispatch(rejectTeam())
  })
)(CommandsLocal);
