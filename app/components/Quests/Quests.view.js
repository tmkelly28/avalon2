import React from 'react';
import Quest from '../Quest';

const fiveQuests = [1, 2, 3, 4 , 5];
const DEFAULT = {};

export default ({
  quest1 = DEFAULT,
  quest2 = DEFAULT,
  quest3 = DEFAULT,
  quest4 = DEFAULT,
  quest5 = DEFAULT,
  currentQuest
}) => {
  const fiveQuests = [quest1, quest2, quest3, quest4, quest5];

  return (
    <div>
      <h3>Quests</h3>
      <div className="jumbotron flex justify-between">
      { fiveQuests.map((quest, idx) =>
        <div key={idx}>
          <Quest quest={quest} idx={idx + 1} currentQuest={currentQuest} />
        </div>
      )}
      </div>
    </div>
  );
}
