import _ from 'lodash';

export const isMyTurn = (players, user, questMakerId) => {
  const me = _.find(players, player => _.get(player, 'userId') === user.id);
  if (!me) return false;
  return me.playerId === questMakerId;
}
