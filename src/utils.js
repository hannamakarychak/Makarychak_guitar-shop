export const getNumberWithSpaces = (x) => {
  const parts = x.toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  return parts.join('.');
};

export const getTypeTextByType = (type) => {
  switch (type) {
    case 'acoustic':
      return 'акустическая';
    case 'electro':
      return 'электрогитара';
    default:
      return 'укулеле';
  }
};
