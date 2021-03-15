const COLORS = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];

export const decodedValue = colors => {
  const splicedColors = colors.splice(0,2);
  return Number(splicedColors.map((color) => COLORS.indexOf(color)).join(""));
};
