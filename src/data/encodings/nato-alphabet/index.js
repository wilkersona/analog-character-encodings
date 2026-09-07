import { createCharacters } from '../../characterSet';

const words = [
  'Alfa', 'Bravo', 'Charlie', 'Delta', 'Echo', 'Foxtrot', 'Golf', 'Hotel', 'India',
  'Juliett', 'Kilo', 'Lima', 'Mike', 'November', 'Oscar', 'Papa', 'Quebec', 'Romeo',
  'Sierra', 'Tango', 'Uniform', 'Victor', 'Whiskey', 'X-ray', 'Yankee', 'Zulu',
];

const encoding = {
  id: 'nato-alphabet',
  name: 'NATO Phonetic Alphabet',
  category: 'alphabetic',
  description: 'The NATO phonetic alphabet assigns a distinctive spoken word to each letter.',
  characters: createCharacters({
    folder: 'nato',
    includeLetters: true,
    valueFor: symbol => words[symbol.charCodeAt(0) - 65],
  }),
};

export default encoding;
