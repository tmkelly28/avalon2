import React from 'react';
import PlayerRow from '../PlayerRow';
import _ from 'lodash';

export default ({ players, turnOrder }) => {

  if (turnOrder&& turnOrder.length) {
    players = turnOrder.map(id =>
      _.find(players, player =>
        player.playerId === id));
  }

  const row1 = players.slice(0, 5);
  const row2 = players.slice(5);

  return (
    <div>
      <PlayerRow players={row1} />
      <PlayerRow players={row2} />
    </div>
  );
}
