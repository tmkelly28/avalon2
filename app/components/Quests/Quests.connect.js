import { connect } from 'react-redux';
import QuestsView from './Quests.view';

export default connect(
({ game: {
    quest1,
    quest2,
    quest3,
    quest4,
    quest5,
    currentQuest
  }
}) => ({
  quest1,
  quest2,
  quest3,
  quest4,
  quest5,
  currentQuest
})
)(QuestsView);
