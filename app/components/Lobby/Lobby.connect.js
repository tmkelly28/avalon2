'use strict';

import { connect } from 'react-redux';
import LobbyLocal from './Lobby.local';
import { createGame, joinGame } from '../../store/reducers/game';
import { logOut } from '../../store/reducers/user';

export default connect(
  ({ user }) => ({ user }),

  dispatch => ({
    createGame: user =>
      dispatch(createGame(user)),
    joinGame: (user, gameId) =>
      dispatch(joinGame(user, gameId)),
    logOut: () =>
      dispatch(logOut())
  })
)(LobbyLocal);
