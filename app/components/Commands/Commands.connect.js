import { connect } from 'react-redux';
import CommandsView from './Commands.view';

export default connect(
  ({
    user,
    game: {
      hostId,
      players,
      status
    }
  }) => ({
    user,
    hostId,
    players,
    status
  })
)(CommandsView);
