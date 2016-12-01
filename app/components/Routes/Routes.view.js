'use strict';

import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import Main from '../Main';
import Lobby from '../Lobby';
import Room from '../Room';

export default () => (
  <Router history={browserHistory}>
    <Route path="/" component={Main} />
    <Route path="/begin" component={Lobby} />
    <Route path="/play/:gameId" component={Room} />
  </Router>
);
