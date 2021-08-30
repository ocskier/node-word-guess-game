class Letter {
  constructor(c) {
    this.c = c;
    this.visible = new RegExp(/[0-9]|[a-zA-Z]/, 'i').test(c) ? false : true;
  }
  guess(val) {
    if (val === this.c) {
      this.visible = true;
    }
    return val === this.c;
  }
  toString() {
    return this.visible
      ? this.c
      : new RegExp(/[a-zA-Z]/, 'i').test(this.c)
      ? '_'
      : this.c;
  }
}

module.exports = Letter;
