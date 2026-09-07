const encoding = {
  id: 'tally-marks',
  name: 'Tally Marks',
  category: 'numeric',
  description: 'Tally marks count units with repeated strokes, commonly grouped in fives.',
  characters: Array.from({ length: 10 }, (_, index) => ({
    symbol: String(index + 1),
    svgFile: `tally-marks/${index + 1}.svg`,
    type: 'digit',
  })),
};

export default encoding;
