'use strict';

import React, { Component } from 'react';
import LobbyView from './Lobby.view.js';

export default class LobbyLocal extends Component {
	constructor(props) {
		super(props);

		this.methods = {
			handleNewGame: this.handleNewGame.bind(this),
			handleJoinGame: this.handleJoinGame.bind(this)
			// handleStartGame: this.handleStartGame.bind(this)
		};
	}

	handleNewGame() {
		this.props.createGame();
	}

	handleJoinGame(gameId) {
		this.props.updateGame(gameId);
	}

	// handleStartGame(gameId, playerCount) {
	// 	this.props.startGame(gameId, playerCount);
	// }

	render() {
		return <LobbyView
			{...this.props}		// from connect()
			{...this.methods}
		/>
	}
}
