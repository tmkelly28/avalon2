import React from 'react';

const questStyle = {
  margin: '1rem',
};

const currentQuestColor = {
  color: 'darkblue'
};

const succeededQuestColor = {
  color: 'green'
};

const failedQuestColor = {
  color: 'red'
};

export default ({
  idx,
  currentQuest,
  quest: {
    requiredPlayers,
    numberOfFailsNeeded,
    result
  }
}) => {

  let _style = questStyle;

  if (currentQuest === idx)
    _style = Object.assign({}, questStyle, currentQuestColor);
  else if (result === 'success')
    _style = Object.assign({}, questStyle, succeededQuestColor);
  else if (result === 'failure')
    _style = Object.assign({}, questStyle, failedQuestColor);
  else _style = questStyle;

  return (
    <div key={idx} style={_style}>
      <p>Quest {idx}</p>
      {
        requiredPlayers &&
        <div>
          <div>{requiredPlayers} heroes needed</div>
          <div>{numberOfFailsNeeded} fails</div>
        </div>
      }
    </div>
  );
}
