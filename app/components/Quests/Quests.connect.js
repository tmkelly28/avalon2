import { connect } from 'react-redux';
import QuestsView from './Quests.view';

export default connect(
({ game: {
    quests,
    currentQuest
  }
}) => ({
  quests,
  currentQuest
})
)(QuestsView);
