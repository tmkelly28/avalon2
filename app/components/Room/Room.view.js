import React from 'react';
import Players from '../Players';
import ControlPanel from '../ControlPanel';

const marginTop = { marginTop: '20px' };

export default ({}) => {
  return (
    <div className="container" style={marginTop}>
      <Players />
      <ControlPanel />
    </div>
  );
}
