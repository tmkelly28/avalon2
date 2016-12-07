import React from 'react';

const random = (minInclusive, maxExclusive) =>
  Math.floor(Math.random() * (maxExclusive - minInclusive) + minInclusive);

const ICONS = `../../../public/icons/`;

const avatarStyle = {
  height: '100px',
  width: '75px',
  borderRadius: '10%',
  backgroundColor: 'lightblue'
};

export default ({
  user,
  player: {
    userId,
    email,
    character,
    loyalty
  }
}) => {
  const isMe = user.id === userId;

  let avatar;
  if (character === 'merlin')
    avatar = `${ICONS}merlin.png`;
  else if (character === 'assassin')
    avatar = `${ICONS}assassin.png`;
  else if (loyalty === 'good')
    avatar = `${ICONS}loyal_${random(1, 6)}.png`;
  else if (loyalty === 'evil')
    avatar = `${ICONS}minion_${random(1, 4)}.png`;

  return (
    <div>
      <h5>{ email }</h5>
      <div className="flex" key={userId}>
        {
          isMe ?
          <img src={avatar} style={avatarStyle} /> : <div style={avatarStyle}></div>
        }
        <div className="flex flex-column">
          <button className="btn btn-link">Guess Merlin</button>
          {/*<button className="btn btn-link">Use Lady</button>*/}
          <button className="btn btn-link">Take on Quest</button>
          <button className="btn btn-link">Remove from Quest</button>
        </div>
      </div>
    </div>
  );
}
