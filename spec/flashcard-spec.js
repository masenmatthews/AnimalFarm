import { Flashcard } from './../js/flashcard.js';

describe('Flashcard', function() {
  let flashcard = new Flashcard("History", "What president was assassinated in Dallas, Texas?", "JFK")

  it('should recognize a flashcard object', function() {
    expect(flashcard.category).toEqual("History");
    expect(flashcard.question).toEqual("What president was assassinated in Dallas, Texas?");
    expect(flashcard.answer).toEqual("JFK");
  });

});
