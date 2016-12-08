const ICONS = `../../../public/icons/`;

export default character => {
  if (character === 'merlin')
    return `${ICONS}merlin.png`;
  else if (character === 'assassin')
    return `${ICONS}assassin.png`;
  else if (character === 'servant')
    return `${ICONS}loyal_4.png`;
  else if (character === 'minion')
    return `${ICONS}minion_1.png`;
};

