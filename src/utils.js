export const getNumberWithSpaces = (x) => {
  const parts = x.toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  return parts.join('.');
};

export const deleteId = (id, array) => array.filter((el, index) => array.indexOf(id) !== index);
