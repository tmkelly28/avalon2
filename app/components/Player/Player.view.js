import React from 'react';
import getAvatar from './getAvatar';
import _ from 'lodash';

const avatarStyle = {
  height: '100px',
  width: '75px',
  borderRadius: '10%',
  backgroundColor: 'lightblue'
};

const characterTurnStyle = {
  color: 'forestgreen',
  fontWeight: 600
};

export default ({
  user,
  player: {
    userId,
    playerId,
    email,
    character
  },
  turnOrder,
  currentTurn,
  proposedTeam,
  myTurn,
  quests,
  currentQuest,
  status,

  // methods
  takeOnQuest,
  removeFromQuest
}) => {

  const isMe = user.id === userId;
  const avatar = getAvatar(character);
  const questMakerId = turnOrder[currentTurn];
  const theirTurn = questMakerId === playerId;
  const showTakeOnQuest = myTurn &&
    !_.includes(proposedTeam, playerId) &&
    status === 'TEAMMAKE' &&
    proposedTeam.length < quests[currentQuest].requiredPlayers;
  const showRemoveFromQuest = myTurn && _.includes(proposedTeam, playerId);

  console.log(myTurn, status, quests[currentQuest])

  return (
    <div>
      <h5 style={theirTurn ? characterTurnStyle : null}>{ email }</h5>
      <div className="flex" key={userId}>
        {
          isMe ?
          <img src={avatar} style={avatarStyle} /> :
          <div style={avatarStyle}></div>
        }
        <div className="flex flex-column">
          { false && <button className="btn btn-link">Guess Merlin</button> }
          { showTakeOnQuest &&
            <button
              onClick={() => takeOnQuest(playerId)}
              className="btn btn-link">
              Take on Quest
            </button> }
          { showRemoveFromQuest &&
            <button
              onClick={() => removeFromQuest(playerId)}
              className="btn btn-link">
              Remove from Quest
            </button> }
        </div>
      </div>
    </div>
  );
}
