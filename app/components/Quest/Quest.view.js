import React from 'react';

const questStyle = {
  margin: '1rem',
};

const currentQuestColor = {
  color: 'lightblue'
};

const succeededQuestColor = {
  color: 'green'
};

const failedQuestColor = {
  color: 'red'
};

export default ({}) => {

  return (
    <div style={questStyle}>
      <p>Quest #</p>
      <div># heroes needed</div>
      <div># fails</div>
    </div>
  );
}
