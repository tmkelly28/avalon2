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
      <h3>Welcome, {user.displayName ? user.displayName : user.email}!</h3>
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
        <button
          className="btn btn-success"
          style={margin}
          onClick={() => handleNewGame(user)} >
          Create New
        </button>
        <Link to="/room/1" className="btn btn-primary" style={margin}>Join Game</Link>
        <Link to="/" className="btn btn-secondary" style={margin}>Log Out</Link>
      </div>
    </div>
  );
};
