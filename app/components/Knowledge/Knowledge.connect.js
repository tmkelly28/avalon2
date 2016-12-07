import { connect } from 'react-redux';
import _ from 'lodash';
import KnowledgeView from './Knowledge.view';

export default connect(
  ({
    user,
    game: { players }
  }) => ({
    user,
    players
  })
)(KnowledgeView);
