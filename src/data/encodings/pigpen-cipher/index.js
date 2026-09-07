import { createCharacters } from '../../characterSet';

const encoding = {
  id: 'pigpen-cipher',
  name: 'Pigpen Cipher',
  category: 'alphabetic',
  description: 'Pigpen replaces letters with geometric symbols based on their position in a pair of grids.',
  characters: createCharacters({ folder: 'pigpen', includeLetters: true }),
};

export default encoding;
