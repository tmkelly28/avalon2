import { connect } from 'react-redux';
import CommandsLocal from './Commands.local';
import { startGame } from '../../store/reducers/game';

export default connect(
  ({
    user,
    game: {
      hostId,
      players = [],
      status,
      gameId
    }
  }) => ({
    user,
    hostId,
    players,
    status,
    gameId
  }),
  dispatch => ({
    startGame (numPlayers, gameId) {
      dispatch(startGame(numPlayers, gameId));
    }
  })
)(CommandsLocal);
