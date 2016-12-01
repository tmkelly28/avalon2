'use strict';

import React, { Component } from 'react';
import LobbyView from './Lobby.view.js';

export default class LobbyLocal extends Component {
	constructor(props) {
		super(props);

		this.state = {
			gameId: ''
		}

		this.methods = {
			handleNewGame: this.handleNewGame.bind(this),
			handleJoinGame: this.handleJoinGame.bind(this),
			// handleStartGame: this.handleStartGame.bind(this)
			getNumPlayers: this.getNumPlayers.bind(this),
			handleIdInput: this.handleIdInput.bind(this)
		};
	}

	handleNewGame(user) {
		this.props.createGame(user);
	}

	handleJoinGame(user, gameId) {
		this.props.updateGame(user, gameId);
	}

	handleIdInput(evt) {
		const value = evt.target.value;
		this.setState({gameId: value});
	}

	getNumPlayers() {
		return this.props.game.players.length;
	}

	// handleStartGame(gameId, playerCount) {
	// 	this.props.startGame(gameId, playerCount);
	// }

	render() {
		return <LobbyView
			{...this.props}
			{...this.state}
			{...this.methods}
		/>
	}
}
