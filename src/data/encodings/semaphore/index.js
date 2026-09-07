import { createCharacters } from '../../characterSet';

const encoding = {
  id: 'semaphore',
  name: 'Semaphore Flags',
  category: 'alphabetic',
  description: 'Semaphore uses two flags to represent letters and some special signals.',
  characters: createCharacters({
    folder: 'semaphore',
    includeLetters: true,
    extras: [
      { symbol: 'START', svgFile: 'semaphore/start.svg', type: 'special' },
      { symbol: 'END', svgFile: 'semaphore/end.svg', type: 'special' },
    ],
  }),
};

export default encoding;
