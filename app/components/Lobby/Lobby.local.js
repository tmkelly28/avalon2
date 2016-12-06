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
      handleGameIdInput: this.handleGameIdInput.bind(this),
      handleLogOut: this.handleLogOut.bind(this)
    };
  }

  listenForPlayers(gameId) {
    db.ref(`games/${gameId}`).on('value', (snapshot) => {
      this.props.addPlayer(snapshot.val());
    });
  }

  handleNewGame(user) {
    const gameId = this.props.createGame(user).game.id;
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

  handleLogOut (evt) {
    evt.preventDefault();
    this.props.logOut();
  }

  getNumPlayers(gameObj) {
    const playerIds = Object.keys(gameObj.players).length;
    // if (!playerIds) return;
    return playerIds;
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
