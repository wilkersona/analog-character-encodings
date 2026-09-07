import { createCharacters } from '../../characterSet';

const encoding = {
  id: 'seven-segment',
  name: 'Seven-Segment Display',
  category: 'numeric',
  description: 'Seven-segment displays form numbers from seven individually controlled bars.',
  characters: createCharacters({
    folder: 'seven-segment',
    includeDigits: true,
  }),
};

export default encoding;
