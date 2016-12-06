import React, { Component } from 'react';
import { hashHistory } from 'react-router';
import RoutesView from './Routes.view';

export default class RoutesLocal extends Component {

  componentDidMount () {
    window.firebase.auth()
      .onAuthStateChanged(member => {
        if (member) {
          const { email, uid } = member;
          const gameUser = {
            email,
            id: uid
          }
          this.props.receiveUser(gameUser)
          hashHistory.push('/lobby');
        }
        else console.log('no user!');
      });
  }

  render () {
    return <RoutesView />
  }
}
