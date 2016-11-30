import { connect } from 'react-redux';	// access dispatch() and generate container components
import RoutesLocal from './Routes.local';
import { receiveUser } from '../../reducer/user';

export default connect (	// connect(mapStatetoProps, mapDispatchToProps)(renderComponent)
  null,
  dispatch => ({
    receiveUser: user =>
      dispatch(receiveUser(user))	// receiveUser passed as props to RoutesLocal
  })
)(RoutesLocal);
