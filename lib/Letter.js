class Letter {
  constructor(c) {
    this.c = c;
    this.visible = new RegExp(/[0-9]|[a-zA-Z]/, 'i').test(c) ? false : null;
  }
}

module.exports = Letter;
