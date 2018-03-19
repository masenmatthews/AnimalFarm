export class Flashcard {

  constructor() {
    this.category = category;
    this.question = question;
    this.answer = answer;
    this.timer = 0;
  }

  answerTime() {
    setInterval(() => {
      this.timer--;
    }, 3000);
  }

//   didYouGetEaten() {
//   if (this.foodLevel > 0) {
//     return false;
//   } else {
//     return true;
//   }
// }

}
