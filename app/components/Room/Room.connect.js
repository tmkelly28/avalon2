import { connect } from 'react-redux';
import RoomLocal from './Room.local';
import { updateGame } from '../../store/reducers/game';

export default connect(
    (state, ownProps) => Object.assign({}, state, ownProps),
    dispatch => ({
      updateGame (update) {
        dispatch(updateGame(update));
      }
    })
)(RoomLocal);
