import React from 'react';
import _ from 'lodash';

const margin = { margin: '5px' };

export default ({
  players,
  status,
  hostId,
  user
}) => {

  const numPlayers = _.values(players).length;
  const userId = user && user.id;

  return (
    <div>
      <h3>Commands</h3>
      <div className="flex flex-column">
      {
        hostId === userId && status === 'PREGAME' &&
        <button className="btn btn-primary" style={margin}>Start Game</button>
      }
      {
        status === 'ONQUEST' &&
        <div>
          <button className="btn btn-success" style={margin}>Succeed</button>
          <button className="btn btn-danger" style={margin}>Fail</button>
        </div>
      }
      {
        status === 'VOTE' &&
        <div>
          <button className="btn btn-success" style={margin}>Approve</button>
          <button className="btn btn-warning" style={margin}>Reject</button>
        </div>
      }
      {
        status === 'PREQUEST' &&
        <button className="btn btn-primary" style={margin}>Go on Quest</button>
      }
      </div>
    </div>
  );
}
