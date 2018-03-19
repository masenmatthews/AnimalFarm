export class Farm {

  constructor(animal) {
    this.animal = animal;
    this.hour = 0;
    this.health = 10;
    this.food = 10;
    this.rest = 10;
  }

  setHunger() {
    setInterval(() => {
      this.food--;
    }, 4500);
  }

  feed() {
    this.feed += 2;
  }

  setSleep() {
    setInterval(() => {
      this.food--;
    }, 6000);
  }

  sleep() {
    this.rest += 5;
  }

  sick() {
    let food = this.food;
    let rest = this.rest;
    let health = this.health;
    if ((rest <= 6) && (food <= 7)) {
      return health -= 3;
      } else if
        (food <= 5) {
          return health -= 2;
      } else if
        (rest <= 3) {
          return health -= 5;
      } else {
        alert("Your animal is healthy!");
      }
    }

  // die() {
  //   let health = this.health;
  //   if (health <= 2) {
  //   }
  // }

    medicate() {
      this.health += 2;
    }
}
