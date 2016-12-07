'use strict';

import React, { Component } from 'react';
import RoomView from './Room.view.js';
import db from '../../db';
import store from '../../store';

export default class RoomLocal extends Component {

  constructor (props) {
    super(props);

    const { user } = this.props;
    const { roomId } = this.props.params;

    this.gamePath = `games/${roomId}`;
    this.state = { user, roomId };
    this.methods = {};
  }


  componentDidMount () {
    db.ref(this.gamePath).once('value').then(snap => {
      this.props.updateGame(snap.val());
    });

    db.ref(this.gamePath).on('value', snap => {
      const state = Object.assign({}, state, snap.val());
      this.props.updateGame(snap.val());
    });
  }

  render() {
    return <RoomView {...this.state} {...this.props} {...this.methods} />
  }
}
