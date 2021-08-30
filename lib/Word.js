const Letter = require('./Letter');

class Word {
  constructor(word) {
    this.letters = word.split('').map((c) => new Letter(c));
  }

  guessLetter(val) {
    return this.letters.some((c) => c.guess(val));
  }
}

module.exports = Word;
