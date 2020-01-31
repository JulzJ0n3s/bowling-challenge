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



describe("Player", function() {
  var player;
  var score;

  beforeEach(function() {
    player = new Player();
    score = jasmine.createSpyObj('score', ['frame']);
  });

  it("should be able to input 2 score ", function() {
    player.scorecard(score);
    expect(score.frame(score1, score2)).toEqual(score1, score2);
  });

  
});
