const Letter = require('./Letter');

class Word {
  constructor(word) {
    this.letters = word.split('').map((c) => new Letter(c));
  }

  guessLetter(val) {
    return this.letters.some((c) => c.guess(val));
  }
  guessedCorrectly() {
    return this.letters.every((c) => c.visible);
  }
}

module.exports = Word;
