'use strict';

import { connect } from 'react-redux';
import LobbyLocal from './Lobby.local';
// import { createGame, updateGame, addPlayer, startGame } from '../../store/reducer/game';
import { logOut } from '../../store/reducers/user';

export default connect(
  ({ user, game }) => ({ user, game }),

  dispatch => ({
    // createGame: user =>
    //   dispatch(createGame(user)),
    // updateGame: (user, gameId) =>
    //   dispatch(updateGame(user, gameId)),
    // addPlayer: game =>
    //   dispatch(addPlayer(game)),
    // startGame: game =>
    //   dispatch(startGame(game)),
    logOut: () =>
      dispatch(logOut())
  })
)(LobbyLocal);
