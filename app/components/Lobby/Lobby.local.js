'use strict';

import React, { Component } from 'react';
import LobbyView from './Lobby.view.js';
import db from '../../db';

export default class LobbyLocal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: ''
    };

    this.methods = {
      handleNewGame: this.handleNewGame.bind(this),
      handleJoinGame: this.handleJoinGame.bind(this),
      handleChange: this.handleChange.bind(this),
      handleLogOut: this.handleLogOut.bind(this)
    };
  }

  handleNewGame (user) {
    this.props.createGame(user);
  }

  handleJoinGame () {
    this.props.joinGame(this.props.user, this.state.inputValue);
  }

  handleChange (evt) {
    const inputValue = evt.target.value;
    this.setState({ inputValue });
  }

  handleLogOut (evt) {
    evt.preventDefault();
    this.props.logOut();
  }

  render() {
    return <LobbyView {...this.props} {...this.state} {...this.methods} />
  }
}
