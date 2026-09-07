const colors = [
  ['0', 'Black', 'black'],
  ['1', 'Brown', 'brown'],
  ['2', 'Red', 'red'],
  ['3', 'Orange', 'orange'],
  ['4', 'Yellow', 'yellow'],
  ['5', 'Green', 'green'],
  ['6', 'Blue', 'blue'],
  ['7', 'Violet', 'violet'],
  ['8', 'Gray', 'gray'],
  ['9', 'White', 'white'],
];

const encoding = {
  id: 'resistor-colors',
  name: 'Resistor Color Code',
  category: 'numeric',
  description: 'Resistor color bands assign the digits 0 through 9 to ten standard colors.',
  characters: colors.map(([symbol, value, file]) => ({
    symbol,
    value,
    svgFile: `resistor-colors/${file}.svg`,
    type: 'digit',
  })),
};

export default encoding;
