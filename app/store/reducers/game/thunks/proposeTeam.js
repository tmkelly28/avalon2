import db from '../../../../db';

export default () => (dispatch, getState) => {
  const { game: { gameId } } = getState();
  const status = 'TEAMVOTE';

  db.ref(`games/${gameId}`).update({ status });
};
