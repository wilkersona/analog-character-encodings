import { createCharacters } from '../../characterSet';

const letterValues = [
  '.-', '-...', '-.-.', '-..', '.', '..-.', '--.', '....', '..', '.---',
  '-.-', '.-..', '--', '-.', '---', '.--.', '--.-', '.-.', '...', '-',
  '..-', '...-', '.--', '-..-', '-.--', '--..',
];

const digitValues = ['-----', '.----', '..---', '...--', '....-', '.....', '-....', '--...', '---..', '----.'];

const encoding = {
  id: 'morse',
  name: 'Morse Code',
  category: 'alphanumeric',
  description: 'International Morse encodes Latin letters and digits as dots and dashes.',
  characters: createCharacters({
    folder: 'morse',
    includeLetters: true,
    includeDigits: true,
    valueFor: symbol => symbol.length === 1 && /[A-Z]/.test(symbol)
      ? letterValues[symbol.charCodeAt(0) - 65]
      : digitValues[Number(symbol)],
  }),
};

export default encoding;
