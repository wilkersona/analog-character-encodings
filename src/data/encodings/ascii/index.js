import { createCharacters } from '../../characterSet';

const encoding = {
  id: 'ascii',
  name: 'ASCII',
  category: 'alphanumeric',
  description: 'ASCII assigns decimal codes to uppercase and lowercase Latin letters and digits.',
  characters: createCharacters({
    folder: 'ascii',
    includeLetters: true,
    includeLowercase: true,
    includeDigits: true,
    order: ['digits', 'letters', 'lowercase'],
    valueFor: symbol => String(symbol.charCodeAt(0)),
  }),
};

export default encoding;
