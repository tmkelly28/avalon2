'use stict';

import React from 'react';
import { Link } from 'react-router';

const margin = { margin: '1px' };

export default ({
  user,
  inputValue,
  handleNewGame,
  handleJoinGame,
  handleChange,
  handleLogOut
}) => {
  return (
    <div id="lobby" className="container">
      <h3>Welcome, {user.displayName ? user.displayName : user.email}!</h3>
      <div className="form-group">
        <input
          name="gameId"
          className="form-control"
          value={inputValue}
          type="text"
          placeholder="Enter game code to join"
          onChange={handleChange}
        />
      </div>
      <div>
        <button
          className="btn btn-success"
          style={margin}
          onClick={() => handleNewGame(user)} >
          Create New
        </button>
        <button
          onClick={handleJoinGame}
          className="btn btn-primary"
          style={margin}>
          Join Game
        </button>
        <button
          onClick={handleLogOut}
          className="btn btn-secondary"
          style={margin}>
          Log Out
        </button>
      </div>
    </div>
  );
};

