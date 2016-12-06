'use strict';

import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import Main from '../Main';
import Lobby from '../Lobby';
import Room from '../Room';

import store from '../../store';

const main = (next, replace) => {
  const state = store.getState();
  if (state.user.email) replace('/lobby');
};

const lobby = (next, replace) => {
  const state = store.getState();
  if (!state.user.email) replace('/');
};

export default () => (
  <Router history={hashHistory}>
    <Route path="/" component={Main} onEnter={main} />
    <Route path="/lobby" component={Lobby} onEnter={lobby} />
    <Route path="/room/:roomId" component={Room} />
  </Router>
);
