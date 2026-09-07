import { createCharacters } from '../../characterSet';

const ita2Values = {
  A: '00011', B: '11001', C: '01110', D: '01001', E: '00001',
  F: '01101', G: '11010', H: '10100', I: '00110', J: '01011',
  K: '01111', L: '10010', M: '11100', N: '01100', O: '11000',
  P: '10110', Q: '10111', R: '01010', S: '00101', T: '10000',
  U: '00111', V: '11110', W: '10011', X: '11101', Y: '10101', Z: '10001',
};

const encoding = {
  id: 'baudot',
  name: 'Baudot Code',
  category: 'alphabetic',
  description: 'Baudot is a five-bit character code developed for early telegraph and teletype machines.',
  characters: createCharacters({
    folder: 'baudot',
    includeLetters: true,
    valueFor: symbol => ita2Values[symbol],
  }),
};

export default encoding;
