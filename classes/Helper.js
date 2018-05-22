export default class Helper {
  constructor() {

  }

  static random(min, max) {
    return Math.floor(min + (Math.random() * (max - min)));
  }
}
