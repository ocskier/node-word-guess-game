class Letter {
  constructor(c) {
    this.c = c;
    this.visible = new RegExp(/[0-9]|[a-zA-Z]/, 'i').test(c) ? false : null;
  }
  guess(val) {
    if (val === this.c) {
      this.visible = true;
    }
    return val === this.c;
  }
}

module.exports = Letter;