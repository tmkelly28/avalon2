import React from 'react';

const DUMMY_RANDOM = Math.floor(Math.random() * (6 - 1) + 1);
const DUMMY_AVATAR = `../../../public/icons/loyal_${DUMMY_RANDOM}.png`;

const avatar = {
  height: '100px',
  width: '75px',
  borderRadius: '10%'
};

export default ({
  player: {
    playerId
  }
}) => {
  return (
    <div className="flex" key={playerId}>
      <img src={DUMMY_AVATAR} style={avatar} />
      <div className="flex flex-column">
        <button className="btn btn-link">Guess Merlin</button>
        <button className="btn btn-link">Use Lady</button>
        <button className="btn btn-link">Take on Quest</button>
        <button className="btn btn-link">Remove from Quest</button>
      </div>
    </div>
  );
}
