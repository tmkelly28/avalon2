import React from 'react';
import Commands from '../Commands';
import Knowledge from '../Knowledge';
import Quests from '../Quests';

export default ({}) => {

  return (
    <div className="flex justify-between">
      <Commands />
      <Quests />
      <Knowledge />
    </div>
  );
}
