import React, { Component } from 'react';
import RoutesView from './Routes.view';

export default class RoutesLocal extends Component {

  componentDidMount () {
    window.firebase.auth()
      .onAuthStateChanged(member => {
        if (member) {
          const {displayName, email, photoUrl, uid} = member;
          const gameUser = {
            displayName,
            email,
            photoUrl: photoUrl || null,
            id: uid
          }
          this.props.receiveUser(gameUser)
        }
        else console.log('no user!');
      });
  }

  render () {
    return <RoutesView />
  }
}
