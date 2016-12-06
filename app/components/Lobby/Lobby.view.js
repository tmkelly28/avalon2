'use stict';

import React from 'react';
import { Link } from 'react-router';

const margin = { margin: '1px' };

export default ({
  user,
  game,
  gameId,
  handleNewGame,
  handleJoinGame,
  handleGameIdInput,
  handleLogOut,
  getNumPlayers
}) => {
  return (
    <div id="lobby" className="container">
      <h3>Welcome USER_NAME!</h3>
      <div className="form-group">
        <input
          name="gameId"
          className="form-control"
          value={gameId}
          type="text"
          placeholder="Enter game code to join"
          onChange={handleGameIdInput}
        />
      </div>
      <div>
        <Link to="/room/1" className="btn btn-primary" style={margin}>Join</Link>
        <button className="btn btn-success" style={margin}>Create New</button>
        <Link to="/" className="btn btn-secondary" style={margin}>Log Out</Link>
      </div>
    </div>
  );
};
