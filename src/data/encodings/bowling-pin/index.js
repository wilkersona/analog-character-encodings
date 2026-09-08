const encoding = {
  id: 'bowling-pin',
  name: 'Bowling Pin',
  category: 'numeric',
  description: 'Symbols based on the number of pins knocked down in each frame.',
  characters: Array.from({ length: 10 }, (_, index) => ({
    symbol: String(index + 1),
    svgFile: `bowling-pin/${index + 1}.svg`,
    type: 'digit',
  })),
};

export default encoding;