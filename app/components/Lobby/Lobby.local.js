'use strict';

import React, { Component } from 'react';
import LobbyView from './Lobby.view.js';
import db from '../../db';

export default class LobbyLocal extends Component {
	constructor(props) {
		super(props);

		this.state = {
			gameId: ''
		};

		this.methods = {
			handleNewGame: this.handleNewGame.bind(this),
			handleJoinGame: this.handleJoinGame.bind(this),
			// handleStartGame: this.handleStartGame.bind(this)
			getNumPlayers: this.getNumPlayers.bind(this),
			handleGameIdInput: this.handleGameIdInput.bind(this)
		};
	}

	listenForPlayers(gameId) {
		// let gameId = this.props.game.id;
		db.ref(`games/${gameId}`).on('value', (snapshot) => {
			console.log('SNAPSHOT VAL', snapshot.val());
			this.props.addPlayer(snapshot.val());
		});
	}

	handleNewGame(user) {
		const gameId = this.props.createGame(user).game.id;
		console.log('game id??', gameId);
		this.listenForPlayers(gameId);
	}

	handleJoinGame(user, gameId) {
		this.props.updateGame(user, gameId);
		this.listenForPlayers(gameId);
	}

	handleGameIdInput(evt) {
		const value = evt.target.value;
		this.setState({ gameId: value });
	}

	getNumPlayers(gameObj) {
		const playerIds = Object.keys(gameObj.players).length;
		console.log('PLAYER IDS', playerIds);
		// if (!playerIds) return;
		return playerIds;
	}

	// update when players join, listening to firebase >> will unmount when view changes

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

	// componentWillReceiveProps(nextProps) {
	// 	let gameId = this.props.game.id;
	// 	if (Object.keys(nextProps.game.players).contains === 1) {
	// 		db.ref(`games/${gameId}`).on('value', (snapshot) => {
	// 			console.log('SNAPSHOT VAL', snapshot.val());
	// 			this.props.addPlayer(snapshot.val()[gameId]);
	// 		});
	// 	}
	// }
}
