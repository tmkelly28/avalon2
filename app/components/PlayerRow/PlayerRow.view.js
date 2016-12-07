import React from 'react';
import Player from '../Player';

const margin = { margin: '10px' };

export default (props) => {
  const { players } = props;

  return (
    <div className="row flex justify-between" style={margin}>
      { players.map(player =>
        <div key={player.userId}>
          <Player {...props} player={player} />
        </div>
      )}
    </div>
  );
}
