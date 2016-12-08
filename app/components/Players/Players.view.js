import React from 'react';
import PlayerRow from '../PlayerRow';
import _ from 'lodash';
import { isMyTurn } from '../utils';

export default (props) => {

  let { players, user, turnOrder, currentTurn } = props;

  if (turnOrder && turnOrder.length) {
    players = turnOrder.map(id =>
      _.find(players, player =>
        player.playerId === id));
  }

  const row1 = players.slice(0, 5);
  const row2 = players.slice(5);
  const questMakerId = turnOrder[currentTurn]
  const myTurn = isMyTurn(players, user, questMakerId);

  const _props = Object.assign({}, props, { myTurn, questMakerId })
  return (
    <div>
      <PlayerRow {..._props} players={row1} />
      <PlayerRow {..._props} players={row2} />
    </div>
  );
}
