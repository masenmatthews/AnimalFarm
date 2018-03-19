export class Game {

  constructor() {
    this.score = 0;
    this.timer = 0;
  }

  answerTime() {
    setInterval(() => {
      this.timer--;
    }, 3000);
  }

  restTime() {
    setTimeout(() => {
      alert("Select another card.")
    }, 2000);
  }

}
