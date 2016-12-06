'use strict';

import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import Main from '../Main';
import Lobby from '../Lobby';
import Room from '../Room';

export default () => (
  <Router history={hashHistory}>
    <Route path="/" component={Main} />
    <Route path="/lobby" component={Lobby} />
    <Route path="/room/:roomId" component={Room} />
  </Router>
);
