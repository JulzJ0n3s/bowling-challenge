
// 

const inquirer = require('inquirer')

inquirer
  .prompt([
    {
      type: 'input',
      name: 'player',
      message: 'What is your name?',
      default: 'Player1!',
    },
    {
      type: 'input', 
      name: 'value1',
      message: 'Please enter your score for roll 1',
      
    },
    {
        type: 'input', 
        name: 'value2',
        message: 'Please enter your score for roll 2',
    },
  ])
  .then(answers => {
    console.info('Hi there', answers.player); 
    console.info('You entered scores', answers.value1 , answers.value2);
  });
