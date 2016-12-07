import { connect } from 'react-redux';
import PlayersView from './Players.view';
import { takeOnQuest, removeFromQuest } from '../../store/reducers/game';

export default connect(
({
  user,
  game: {
    players,
    turnOrder,
    currentTurn,
    proposedTeam,
    quests,
    currentQuest,
    status
  }
}) => ({
  user,
  players,
  turnOrder,
  currentTurn,
  proposedTeam,
  quests,
  currentQuest,
  status
}),
dispatch => ({
  takeOnQuest: playerId =>
    dispatch(takeOnQuest(playerId)),
  removeFromQuest: playerId =>
    dispatch(removeFromQuest(playerId))
})
)(PlayersView)
