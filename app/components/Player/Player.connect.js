import { connect } from 'react-redux';
import PlayerView from './Player.view';

export default connect(
  ({ user }, { player }) => ({ user, player })
)(PlayerView);
