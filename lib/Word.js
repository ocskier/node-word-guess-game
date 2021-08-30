const Letter = require('./Letter');

class Word {
  constructor(word) {
    this.letters = word.split('').map((c) => new Letter(c));
  }
}

module.exports = Word;
