'use strict';

import React, { Component } from 'react';
import LobbyView from './Lobby.view.js';

export default class LobbyLocal extends Component {
	constructor(props) {
		super(props);

		this.methods = {
			handleNewRoom: this.handleNewRoom.bind(this),
			handleJoinRoom: this.handleJoinRoom.bind(this),
			handleStartGame: this.handleStartGame.bind(this)
		};
	}

	handleNewRoom() {
		this.props.newGame();
	}

	handleJoinRoom(gameId) {
		this.props.joinGame(gameId);
	}

	handleStartGame(gameId, playerCount) {
		this.props.startGame(gameId, playerCount);
	}

	render() {
		return <LobbyView
			{...this.props}		// from connect()
			{...this.methods}
		/>
	}
}
