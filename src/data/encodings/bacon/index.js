import { createCharacters } from '../../characterSet';

const encoding = {
  id: 'bacon',
  name: "Bacon's Cipher",
  category: 'alphabetic',
  description: 'Bacon\'s cipher encodes letters as five-character groups of A and B.',
  characters: createCharacters({
    folder: 'bacon',
    includeLetters: true,
    valueFor: symbol => (symbol.charCodeAt(0) - 65).toString(2).padStart(5, '0').replaceAll('0', 'A').replaceAll('1', 'B'),
  }),
};

export default encoding;
