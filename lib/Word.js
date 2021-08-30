const Letter = require('./Letter');

class Word {
  constructor(word) {
    this.letters = word.split('').map((c) => new Letter(c));
  }

  guessLetter(val) {
    let changedWord = false;
    this.letters.forEach((c) => {
      if (!changedWord) {
        changedWord = c.guess(val);
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
