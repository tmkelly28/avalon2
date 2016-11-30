'use strict';

import { connect } from 'react-redux';
import LoginLocal from './Login.local';
import { logIn, logOut } from '../../reducer/user';

// console log user

export default connect(
  ({ user }) => ({ user }),		// mapStateToProps
  dispatch => ({				// mapDispatchToProps
    logIn: credentials =>
      dispatch(logIn(credentials)),
    logOut: () =>
      dispatch(logOut())
  })
)(LoginLocal);
