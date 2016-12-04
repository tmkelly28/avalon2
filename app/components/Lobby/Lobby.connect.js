'use strict';

import { connect } from 'react-redux';
import LobbyLocal from './Lobby.local.js';
import { createGame, updateGame, addPlayer, startGame } from '../../reducer/game.js';
import { logOut } from '../../reducer/user';

export default connect(
	// mapStateToProps
	({ user, game }) => ({ user, game }),

	// mapDispatchToProps
	dispatch => ({
		createGame: user =>
			dispatch(createGame(user)),
		updateGame: (user, gameId) =>
			dispatch(updateGame(user, gameId)),
		addPlayer: game =>
			dispatch(addPlayer(game)),
		startGame: game =>
			dispatch(startGame(game)),
		logOut: () =>
			dispatch(logOut())
	})
)(LobbyLocal);
