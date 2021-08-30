const Letter = require('./Letter');

class Word {
  constructor(word) {
    this.letters = word.split('').map((c) => new Letter(c));
  }

  guessLetter(val) {
    let changedWord = false;
    this.letters.map((c) => {
      let found = c.guess(val);
      if (!changedWord) {
        changedWord = found;
      }
    });
    return changedWord;
  }
  guessedCorrectly() {
    return this.letters.every((c) => c.visible);
  }
  toString() {
    return this.letters.map((c) => c.toString()).join(' ');
  }
  getSolution() {
    return this.letters.map((c) => c.char).join('');
  }
}

module.exports = Word;
