'use strict';

import { connect } from 'react-redux';
import LoginLocal from './Login.local';
import { logIn, logOut } from '../../reducer/user';

export default connect(
    // mapStateToProps
    ({ user }) => ({ user }),

    // mapDispatchToProps	
    dispatch => ({
        logIn: credentials =>
            dispatch(logIn(credentials)),
        logOut: () =>
            dispatch(logOut())
    })
)(LoginLocal);
