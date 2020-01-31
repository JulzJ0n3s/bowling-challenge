
// Fetching HTML Elements in Variables by ID.
var x = document.getElementById("scorecard_form");
var createform = document.createElement('form'); // Create New Element Form
createform.setAttribute("action", ""); // Setting Action Attribute on Form
createform.setAttribute("method", "post"); // Setting Method Attribute on Form
x.appendChild(createform);

var heading = document.createElement('h2'); // Heading of Form
heading.innerHTML = "Bowling Scorecard";
createform.appendChild(heading);

var line = document.createElement('hr'); // Giving Horizontal Row After Heading
createform.appendChild(line);

var linebreak = document.createElement('br');
createform.appendChild(linebreak);

var heading2 = document.createElement('h5'); // Heading of Form
heading2.innerHTML = "Frame 1";
createform.appendChild(heading2);

var namelabel = document.createElement('label'); // Create Label for Name Field
namelabel.innerHTML = "Player1 Name: "; // Set Field Labels
createform.appendChild(namelabel);

var inputelement = document.createElement('input'); // Create Input Field for player name
inputelement.setAttribute("type", "text");
inputelement.setAttribute("name", "dname");
createform.appendChild(inputelement);

var linebreak = document.createElement('br');
createform.appendChild(linebreak);
var linebreak = document.createElement('br');
createform.appendChild(linebreak);

var scoref1r1label = document.createElement('label'); // Create Label for frame 1
scoref1r1label.innerHTML = "Your score from frame 1, roll 1: ";
createform.appendChild(scoref1r1label);

var scoref1r1element = document.createElement('input'); // Create Input Field for frame 1
scoref1r1element.setAttribute("type", "text");
scoref1r1element.setAttribute("name", "dname");
createform.appendChild(scoref1r1element);

var scoref1r2label = document.createElement('label'); // Create Label for frame 1
scoref1r2label.innerHTML = "frame 1, roll 2: ";
createform.appendChild(scoref1r2label);

var scoref1r2element = document.createElement('input'); // Create Input Field for frame 1
scoref1r2label.setAttribute("type", "text");
scoref1r2label.setAttribute("name", "dname");
createform.appendChild(scoref1r2element);

var scoref1r1break = document.createElement('br');
createform.appendChild(scoref1r1break);
var scoref1r1break = document.createElement('br');
createform.appendChild(scoref1r1break);

var bonusf1label = document.createElement('label'); // Create Label for bonus points 1
bonusf1label.innerHTML = "Frame 1 bonus points ";
createform.appendChild(bonusf1label);

var bonusf1element = document.createElement('input'); // Create Input Field for frame 1
bonusf1label.setAttribute("type", "text");
bonusf1label.setAttribute("name", "dname");
createform.appendChild(bonusf1element);

var scoref1r2break = document.createElement('br');
createform.appendChild(scoref1r2break);
var scoref1r2break = document.createElement('br');
createform.appendChild(scoref1r2break);

var heading3 = document.createElement('h5'); // Heading of Form
heading3.innerHTML = "Frame 2";
createform.appendChild(heading3);

var submitelement = document.createElement('input'); // Append Submit Button
submitelement.setAttribute("type", "submit");
submitelement.setAttribute("name", "dsubmit");
submitelement.setAttribute("value", "Submit");
createform.appendChild(submitelement);

