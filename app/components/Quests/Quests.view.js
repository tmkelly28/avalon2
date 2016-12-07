import React from 'react';
import Quest from '../Quest';

export default ({
  quests,
  currentQuest
}) => {

  return (
    <div>
      <h3>Quests</h3>
      <div className="jumbotron flex justify-between">
      { quests.map((quest, idx) =>
        <div key={idx}>
          <Quest quest={quest} idx={idx} currentQuest={currentQuest} />
        </div>
      )}
      </div>
    </div>
  );
}
