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

const sigilStyle = {
  height: '25px',
  width: '25px',
  borderRadius: '50%'
};

const ICONS = '../../../public/icons';
const sigil = `${ICONS}/sigil.png`;
const crown = `${ICONS}/crown.png`;
const approve = `${ICONS}/approve.png`;
const reject = `${ICONS}/reject.png`;

export default ({
  user,
  player: {
    userId,
    playerId,
    email,
    character
  },
  proposedTeam,
  myTurn,
  questMakerId,
  quests,
  currentQuest,
  status,

  // methods
  takeOnQuest,
  removeFromQuest
}) => {

  const isMe = user.id === userId;
  const avatar = getAvatar(character);
  const theirTurn = questMakerId === playerId;
  const isOnQuest = _.includes(proposedTeam, playerId);
  const roomForMoreOnQuest = proposedTeam.length < quests[currentQuest].requiredPlayers;
  const showTakeOnQuest = myTurn && !isOnQuest && status === 'TEAMMAKE' && roomForMoreOnQuest;
  const showRemoveFromQuest = myTurn && isOnQuest;

  return (
    <div>
      <div className="flex items-center">
        <h5 style={theirTurn ? characterTurnStyle : null}>{ email }</h5>
      </div>
      <div className="flex" key={userId}>
        { isMe ?
          <img src={avatar} style={avatarStyle} /> :
          <div style={avatarStyle}></div> }
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
          <div className="flex items-center">
            { isOnQuest && <img className="ml1" src={sigil} style={sigilStyle} /> }
            { theirTurn && <img className="ml1" src={crown} style={sigilStyle} /> }
          </div>
        </div>
      </div>
    </div>
  );
}
