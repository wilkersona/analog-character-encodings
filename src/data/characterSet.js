const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz'.split('');
const digits = '0123456789'.split('');

export const createCharacters = ({
  folder,
  includeLetters = false,
  includeLowercase = false,
  includeDigits = false,
  order = ['letters', 'lowercase', 'digits'],
  valueFor,
  extras = [],
}) => order.flatMap(set => {
  const symbols = set === 'letters' && includeLetters
    ? letters
    : set === 'lowercase' && includeLowercase
      ? lowercaseLetters
      : set === 'digits' && includeDigits
        ? digits
        : [];
  const type = set === 'digits' ? 'digit' : 'letter';

  return symbols.map(symbol => ({
    symbol,
    ...(valueFor ? { value: valueFor(symbol) } : { svgFile: `${folder}/${symbol}.svg` }),
    type,
  }));
}).concat(extras);
