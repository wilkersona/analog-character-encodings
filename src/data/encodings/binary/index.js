const values = Array.from({ length: 16 }, (_, value) => ({
  symbol: String(value),
  value: value.toString(2).padStart(4, '0'),
  type: 'digit',
}));

const encoding = {
  id: 'binary',
  name: 'Binary (4-bit)',
  category: 'numeric',
  description: 'Four-bit binary represents values from 0 through 15 using combinations of zero and one.',
  characters: values,
};

export default encoding;
