export class Flashcard {

  constructor() {
    this.category = category;
    this.question = question;
    this.answer = answer;
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

  multipleChoiceRespond() {

  }



//   didYouGetEaten() {
//   if (this.foodLevel > 0) {
//     return false;
//   } else {
//     return true;
//   }
// }

}
