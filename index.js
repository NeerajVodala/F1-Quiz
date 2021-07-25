//formulaOneQuiz

//welcomeMessage
readlineSync = require('readline-sync');
console.log("Welcome to the F1 quiz race!!");
var username = readlineSync.question("Enter name to begin: ");
console.log("\nHello "+username+" let's begin");
console.log("\nIt's lights out and away we go");
console.log("--------------------------------");

// questions
var questions = [
{
 question:
"What is the fullform of F1?\na.Fast1\nb.Furious1\nc.Formula1\nyourAnswer: ",
 
 answer: "c"
},
{
  question:
"Who is the youngest World Drivers Championship winner? \na.Sebastian Vettel\nb.Lewis Hamilton\nc.Fernando Alonso\nyourAnswer: ",
 
 answer: "a"
},
{
  question:
"How many world titles did Michael Schumacher win?\na.5\nb.6\nc.7\nyourAnswer: ",
 
 answer: "c"
},
{
  question:
"The Iceman is the nickname given to which Finnish Formula 1 driver?\na.Valteri Bottas\nb.Kimi Raikkonen\nc.Mika Hakkinen\nyourAnswer: ",
 
 answer: "b"
},
{
  question:
"Daniel Ricciardo is an Australian racing driver who is currently competing in Formula One for?\na.Renault Racing\nb.McLaren Racing\nc.Red Bull Racing\nyourAnswer: ",
 
 answer: "b"
},
{
  question:
"What is the name of the youngest F1 driver to win a race?\na.Lewis Hamilton\nb.Lando Norris\nc.Max Verstappen\nyourAnswer: ",
 
 answer: "c"
},
{
  question:
"One of them is not from Great Britian\na.George Russell\nb.Lance Stroll\nc.Lando Norris\nyourAnswer: ",
 
 answer: "b"
},
{
  question:
"In which year did Nico Rosberg win drivers Championship?\na.2014\nb.2015\nc.2016\nyourAnswer: ",
 
 answer: "c"
},
{
  question:
"Sergio Perez in 2020 went from last to first in which Grand Prix?\na.Sakhir GP\nb.Bahrain GP\nc.Mexican GP\nyourAnswer: ",
 
 answer: "a"
},
{
  question:
"Which of the following is not a street ciruit?\na.Singapore GP\nb.Azerbaijan GP\nc.United States GP\nyourAnswer: ",
 
 answer: "c"
}
]

//answerCheck
var score = 0;
function play(question, answer)
{
  var userAnswer = readlineSync.question(question)
  if(userAnswer.toUpperCase() == answer.toUpperCase())
  {
    console.log("You're correct!");
    score++;
  }
  else{
    console.log("Oops that's incorrect!");
  }
  console.log("score: ",score);
  console.log("--------------------------------");
}

//toTraverse
for(i=0; i<3; i++)
{
  var current = questions[i];
  play(current.question, current.answer);
}
console.log("\nyou're fastest in sector 1 "+username+"\n");
console.log("--------------------------------");

for(i=3; i<7; i++)
{
  var current = questions[i];
  play(current.question, current.answer);
}
console.log("\nWe've DRS available "+username+",entering sector 3\n");
console.log("--------------------------------");

for(i=7; i<questions.length; i++)
{
  var current = questions[i];
  play(current.question, current.answer);
}


//showScore
if(score == 10){
  console.log("That's a pole position mate!\nyour final score is: ",score)
}
else{
console.log(username+" your final score is: ",score);
}

//highScores data
var highScores = [
  {
    name: "Daniel Ricciardo",
    score: 10
  },
  {
    name: "Lando Norris",
    score: 9
  },
  {
    name: "Max Verstappen",
    score: 8
  }
]

//finalMessage
console.log("\nHere are others on grid:")
for(i=0; i<highScores.length; i++)
{
  console.log(highScores[i]);
}
console.log("Did you score a pole? send the data to FIA to get it updated(FIA is me LOL)");
