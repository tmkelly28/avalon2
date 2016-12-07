import React from 'react';
import Players from '../Players';
import ControlPanel from '../ControlPanel';

const marginTop = { marginTop: '20px' };

export default ({
  roomId,
  game: {
    hostId
  }
}) => {
  return (
    <div className="container" style={marginTop}>
      <h5>Your are in room: { roomId }</h5>
      <h5>Your Host: { hostId }</h5>
      <Players />
      <ControlPanel />
    </div>
  );
}
