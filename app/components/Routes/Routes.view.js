'use strict';

import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import Main from '../Main';
import Lobby from '../Lobby';
import Room from '../Room';

import store from '../../store';

export default () => (
  <Router history={hashHistory}>
    <Route path="/" component={Main} />
    <Route path="/lobby" component={Lobby} />
    <Route path="/rooms/:roomId" component={Room} />
  </Router>
);
