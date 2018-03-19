export class Flashcard {

  constructor(category, question, answer) {
    this.category = category;
    this.question = question;
    this.answer = answer;
  }

  aIsCorrect() {
    let question = this.question;
    let answer = this.answer;
    if (answer === "correct") {
      alert("Correct!")
    } else {
      (answer === "false")
      alert("False!")
    }
  }




//   didYouGetEaten() {
//   if (this.foodLevel > 0) {
//     return false;
//   } else {
//     return true;
//   }
// }

}
