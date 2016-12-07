const ICONS = `../../../public/icons/`;

const random = (minInclusive, maxExclusive) =>
  Math.floor(Math.random() * (maxExclusive - minInclusive) + minInclusive);

export default character => {
  if (character === 'merlin')
    return `${ICONS}merlin.png`;
  else if (character === 'assassin')
    return `${ICONS}assassin.png`;
  else if (character === 'servant')
    return `${ICONS}loyal_${random(1, 6)}.png`;
  else if (character === 'minion')
    return `${ICONS}minion_${random(1, 4)}.png`;
};

