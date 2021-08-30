class Letter {
  constructor(c) {
    this.char = c;
    this.visible = new RegExp(/[0-9]|[a-zA-Z]/, 'i').test(c) ? false : true;
  }
  guess(val) {
    if (val === this.char) {
      this.visible = true;
    }
    return val === this.char;
  }
  toString() {
    return this.visible
      ? this.char
      : new RegExp(/[a-zA-Z]/, 'i').test(this.char.toLowerCase())
      ? '_'
      : this.char;
  }
  getSolution() {
    return this.char;
  }
}

module.exports = Letter;
