import { Farm } from './../js/farm.js';

describe('Farm', function() {
  let horse = new Farm("horse");

  it('should recognize a flashcard object', function() {
    expect(horse.health).toEqual(10);
    expect(horse.food).toEqual(10);
    expect(horse.rest).toEqual(10);
  });

  it('should return food plus 2', function() {
    horse.food = 5;
    horse.feed();
    expect(horse.food).toEqual(7);
  });

  it('should return health plus 2', function() {
    horse.health = 6;
    horse.medicate();
    expect(horse.health).toEqual(8);
  });

  it('should return sleep plus 5', function() {
    horse.rest = 3;
    horse.sleep();
    expect(horse.rest).toEqual(8);
  });

  it('should return health status', function() {
    horse.food = 3;
    horse.rest = 3;
    horse.getSick();
    expect(horse.health).toEqual()
  })

});
