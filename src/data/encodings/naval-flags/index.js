import { createCharacters } from '../../characterSet';

const encoding = {
  id: 'naval-flags',
  name: 'Naval Signal Flags',
  category: 'alphanumeric',
  description: 'International maritime signal flags communicate letters, numbers, and standardized messages at sea.',
  characters: createCharacters({ folder: 'naval-flags', includeLetters: true, includeDigits: true }),
};

export default encoding;
