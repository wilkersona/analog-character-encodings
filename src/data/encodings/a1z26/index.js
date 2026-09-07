import { createCharacters } from '../../characterSet';

const encoding = {
  id: 'a1z26',
  name: 'A1Z26',
  category: 'alphabetic',
  description: 'A1Z26 replaces each letter with its position in the alphabet, from 1 through 26.',
  characters: createCharacters({
    folder: 'a1z26',
    includeLetters: true,
    valueFor: symbol => String(symbol.charCodeAt(0) - 64),
  }),
};

export default encoding;
