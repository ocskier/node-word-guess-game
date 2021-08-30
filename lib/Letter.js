class Letter {
  constructor(c) {
    this.char = c;
    this.visible = new RegExp(/[0-9]|[a-zA-Z]/, 'i').test(c) ? false : true;
  }
  guess(val) {
    if (val.toLowerCase() === this.char.toLowerCase()) {
      this.visible = true;
    }
    return val.toLowerCase() === this.char.toLowerCase();
  }
  toString() {
    return this.visible
      ? this.char
      : new RegExp(/[a-zA-Z]/, 'i').test(this.char)
      ? '_'
      : this.char;
  }
  getSolution() {
    return this.char;
  }
}

module.exports = Letter;
