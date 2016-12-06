import React from 'react';

const margin = { margin: '5px' };

export default ({}) => {

  return (
    <div>
      <h3>Commands</h3>
      <div className="flex flex-column">
        <button className="btn btn-primary" style={margin}>Start Game</button>
        <button className="btn btn-success" style={margin}>Succeed</button>
        <button className="btn btn-danger" style={margin}>Fail</button>
        <button className="btn btn-warning" style={margin}>Go on Quest</button>
      </div>
    </div>
  );
}
