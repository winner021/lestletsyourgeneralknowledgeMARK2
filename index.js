readlineSync=require("readline-sync" )
console.log("Hello there welcome to the quiz which will take you with the intresting question out there....");
var yourName=readlineSync.question("so can i please know your name? "); 
const chalk = require('chalk');
const log = console.log;
log(chalk.yellow("hello  " + yourName + "  welcome to the quiz that will take you from a intresting brain workout experience!!!!!!!"));

console.log("\n")

log(chalk.blue("Please answer the below questions correctly.Correct answer will increment your scroe with one and wrong answer will decerenment with one"));
console.log("\n");
console.log("please enter the answers in lower case");
var questionOne={
  question:'which is the national bird of india?',
  answer:"peacock",
}
 var questionTwo={
   question:"what is the capital of india?",
   answer:"new delhi",
}
var questionThree={
  question:"who is the current prime minister of india?",
  answer:"narendra modi",
}
var questionFour={
  question:"what is the capital of karnataka?",
  answer:"banglore",

}
var questionFive={
  question:"which is the largest country of asia?",
  answer:"china",
}
var questionSix={
  
question:"where is the head quater of microsoft located india?",
answer:"hyderabad",
}
 var questionList=[questionOne,questionTwo,questionThree,questionFour,questionFive,questionSix];
 var score=0;

  function quiz(currentQuestion)
  {
    log(chalk.green(currentQuestion.question));
    var yourAnswer=readlineSync.question()
    if(yourAnswer===currentQuestion.answer)
    {
      score=score+1;
    }
    else
    {
      score=score-1;
      
    }
    log(chalk.green("current score :  "+ score));
    if(score>2)
    {
      console.log("\n");
      log(chalk.blue(" you moved to  pro level !!"));
    }
    if(score>5)
    { console.log("\n");
      log(chalk.blue("great you moved two level ninja level !!"));
    }

  }
  
 for(var i=0;i<questionList.length;i++)
 {
    quiz(questionList[i]);
 }
 console.log("\n");
  log(chalk.yellow("yay!!!! your final score is :"+score));
  console.log("\n \n");
  log(chalk.blue("check out the highest score!!if you beat it then send me a screen shot i will update you !!!!"));
  
  var highestScore={
    name: "rohan:5",
     
  }
  log(chalk.red(highestScore.name));
  console.log("\n");

if (readlineSync.keyInYN('did you like the quiz press y for yes and n for no.')) {
  
  log(chalk.yellow("thanks :-)"))
 
} else {
  
  log(chalk.yellow("thanku for your review will work upon it :-)"))
  
}