'use strict';
// User story: As a player, I want to be able to create a scorecard.
// User story: As a player, I want to be able to input 2 scores for one frame into the scorecard.
// User story: As a player, I want to be able to input my bonus score into the scorecard.
// User Story: As a player, I want to be able to tally the number of pins I knock down, on a scorecard.

// Gutter Game 
// fame1 = 0/0
// fame2 = 0/0
// Score =

// Strike
// fame1 = 10
// fame2 = 3/5
// Score 

describe("Game", function () {

  const game = new Game();

  it("for gutter game", function() {
    for (let i = 0; i < 20; i++)
    game.roll(0)

  expect(game.score).toEqual(0);
  });

});


