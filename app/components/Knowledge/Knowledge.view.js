import React from 'react';
import _ from 'lodash';

const DEFAULT = {};

export default ({ user, players }) => {

  const _players = _.values(players);
  const myPlayer = _.find(_players, player => player.userId === user.id) || DEFAULT;
  const myCharacter = myPlayer.character;
  const myLoyalty = myPlayer.loyalty;
  const minions = _players.filter(player => player.loyalty === 'evil');
  let knowledge = [];

  if (myLoyalty === 'good' && myCharacter !== 'merlin')
    knowledge = ['I am a loyal friend of Arther, King of the Britons, and nothing more'];
  else if (myCharacter === 'merlin')
    knowledge = minions.map(minion => `${minion.email} is an evil minion of Mordred!`);
  else if (myLoyalty === 'bad')
    knowledge = minions.map(minion => `${minion.email} is a fellow minion of Mordred!`);

  return (
    <div>
      <h3>What You Know</h3>
      { knowledge.map((str, idx) => <p key={idx}>{ str }</p>) }
    </div>
  );
}
