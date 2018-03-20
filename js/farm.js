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
    }, 1000);
  }

  setSleep() {
    setInterval(() => {
      this.rest--;
    }, 1000);
  }

  isAnimalDead() {
    if ((this.rest <= 1) || (this.food <= 1)) {
       alert("Your animal is dead!")
     }
    }

  checkHunger() {
    let hunger = this.food;
    return hunger;
  }

  checkSleep() {
    let rest = this.rest;
    return rest;
  }

  checkHealth() {
    let health = this.health;
    return health;
  }

  feed() {
    this.food += 2;
  }

  sleep() {
    this.rest += 5;
  }

  medicate() {
    this.health += 2;
  }

  getSick() {
    let food = this.food;
    let rest = this.rest;
    let health = this.health;
    if (rest >= 7 && food >= 7) {
      alert("Your animal is healthy!");
    } else if
      (food <= 5 || rest <= 6) {
        alert("Your animal's health is declining!");
      } else {
        return alert("Your animal is not well!");
      }
    }

  die() {
    let health = this.health;
    if (health <= 2) {
      alert("GAME OVER - your animals are all dead.")
    }
  }
}
