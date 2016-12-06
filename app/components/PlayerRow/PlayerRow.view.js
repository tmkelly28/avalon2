import React from 'react';
import Player from '../Player';

const margin = { margin: '10px' };

export default ({}) => {
  return (
    <div className="row flex justify-between" style={margin}>
      <Player />
      <Player />
      <Player />
      <Player />
      <Player />
    </div>
  );
}
