import React from 'react';
import _ from 'lodash';
import Players from '../Players';
import ControlPanel from '../ControlPanel';

const marginTop = { marginTop: '20px' };

export default ({
  roomId,
  game: {
    hostId,
    status,
    players
  }
}) => {

  const _players = _.values(players);

  return (
    <div className="container" style={marginTop}>
      <h5>Your are in room: { roomId }</h5>
      <h5>Your Host: { hostId }</h5>
      <Players players={_players} />
      <ControlPanel />
    </div>
  );
}
