import { categories } from './categories';
import morse from './encodings/morse';
import semaphore from './encodings/semaphore';
import braille from './encodings/braille';
import baudot from './encodings/baudot';
import natoAlphabet from './encodings/nato-alphabet';
import pigpenCipher from './encodings/pigpen-cipher';
import resistorColors from './encodings/resistor-colors';
import signLanguage from './encodings/sign-language';
import navalFlags from './encodings/naval-flags';
import bacon from './encodings/bacon';
import a1z26 from './encodings/a1z26';
import tapCode from './encodings/tap-code';
import sevenSegment from './encodings/seven-segment';
import binary from './encodings/binary';
import romanNumerals from './encodings/roman-numerals';
import tallyMarks from './encodings/tally-marks';
import ascii from './encodings/ascii';
import ebcdic from './encodings/ebcdic';
import bowlingPin from './encodings/bowling-pin';

export { categories } from './categories';

export const encodings = [
  semaphore,
  braille,
  baudot,
  natoAlphabet,
  pigpenCipher,
  resistorColors,
  morse,
  signLanguage,
  navalFlags,
  bacon,
  a1z26,
  tapCode,
  sevenSegment,
  binary,
  romanNumerals,
  tallyMarks,
  ascii,
  ebcdic,
  bowlingPin
];

export const getEncodingById = id =>
  encodings.find(encoding => encoding.id === id);

export const getEncodingsByCategory = categoryId =>
  encodings.filter(encoding => encoding.category === categoryId);

export const categoryCollections = categories.map(category => ({
  ...category,
  encodings: getEncodingsByCategory(category.id),
}));
