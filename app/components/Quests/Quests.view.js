import React from 'react';
import Quest from '../Quest';

export default ({}) => {

  return (
    <div>
      <h3>Quests</h3>
      <div className="jumbotron flex justify-between">
        <Quest />
        <Quest />
        <Quest />
        <Quest />
        <Quest />
      </div>
    </div>
  );
}
