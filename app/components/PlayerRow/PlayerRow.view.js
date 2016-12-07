import React from 'react';
import Player from '../Player';

const margin = { margin: '10px' };

export default ({
  players,
}) => {
  return (
    <div className="row flex justify-between" style={margin}>
      { players.map(player => <Player player={player} />) }
    </div>
  );
}
