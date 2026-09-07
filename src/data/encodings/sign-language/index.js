import { createCharacters } from '../../characterSet';

const encoding = {
  id: 'sign-language',
  name: 'Sign Language',
  category: 'alphanumeric',
  description: 'Sign languages communicate through hand shapes, movement, orientation, and facial expression.',
  characters: createCharacters({ folder: 'sign-language', includeLetters: true, includeDigits: true }),
};

export default encoding;
