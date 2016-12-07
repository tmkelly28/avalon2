import React from 'react';
import Commands from '../Commands';
import Knowledge from '../Knowledge';
import Quests from '../Quests';

const margin = { margin: '10px' };

export default ({}) => {

  return (
    <div className="flex justify-between">
      <div style={margin}>
        <Commands />
      </div>
      <div style={margin}>
        <Quests />
      </div>
      <div style={margin}>
        <Knowledge />
      </div>
    </div>
  );
}
