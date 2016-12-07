import { connect } from 'react-redux';
import PlayersView from './Players.view';

export default connect(
({ game: {
    players = [],
    turnOrder
  }
}) => ({ players, turnOrder })
)(PlayersView)
