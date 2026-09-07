import { createCharacters } from '../../characterSet';

const cp037 = {
  ...Object.fromEntries('ABCDEFGHI'.split('').map((symbol, index) => [symbol, `C${(index + 1).toString(16).toUpperCase()}`])),
  ...Object.fromEntries('JKLMNOPQR'.split('').map((symbol, index) => [symbol, `D${(index + 1).toString(16).toUpperCase()}`])),
  ...Object.fromEntries('STUVWXYZ'.split('').map((symbol, index) => [symbol, `E${(index + 2).toString(16).toUpperCase()}`])),
  ...Object.fromEntries('abcdefghi'.split('').map((symbol, index) => [symbol, `8${(index + 1).toString(16).toUpperCase()}`])),
  ...Object.fromEntries('jklmnopqr'.split('').map((symbol, index) => [symbol, `9${(index + 1).toString(16).toUpperCase()}`])),
  ...Object.fromEntries('stuvwxyz'.split('').map((symbol, index) => [symbol, `A${(index + 2).toString(16).toUpperCase()}`])),
  ...Object.fromEntries('0123456789'.split('').map((symbol, index) => [symbol, `F${index.toString(16).toUpperCase()}`])),
};

const encoding = {
  id: 'ebcdic',
  name: 'EBCDIC (CP037)',
  category: 'alphanumeric',
  description: 'EBCDIC is an eight-bit character encoding used primarily on IBM mainframe systems.',
  characters: createCharacters({
    folder: 'ebcdic',
    includeLetters: true,
    includeDigits: true,
    valueFor: symbol => cp037[symbol],
  }),
};

export default encoding;
