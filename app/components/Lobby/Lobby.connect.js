'use strict';

import { connect } from 'react-redux';
import LobbyLocal from './Lobby.local.js';
import { newGame, joinGame, startGame } from '../../reducer/game.js';

export default connect(
	// mapStateToProps
	({ game, playerCount, user }) => ({ game, playerCount, user }),		// need at least 5 to play

	// mapDispatchToProps
	dispatch => ({
		newGame: () =>
			dispatch(newGame()),
		joinGame: gameId =>
			dispatch(joinGame(gameId)),
		startGame: (gameId, playerCount) =>
			dispatch(startGame(gameId, playerCount))
	})
)(LobbyLocal);
