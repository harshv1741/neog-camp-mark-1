var rls = require('readline-sync')
const alerts = require('cli-alerts')

// 👇 Question Sheets for questions
var question_sheet = {
      // This quiz is yes no type quiz
      q0: "Am I very emotional?\n1.yes\n2.no",

      q1: "Am I funny\n1.yes\n2.no?",
  
      q2: "Am I a foodie?\n1.yes\n2.no",

      q3: "Am I love playing video games?\n1.yes\n2.no",

      q4: "Am I a short-tempered guy?\n1.yes\n2.no",

      q5: "Am I talk too much?\n1.yes\n2.no",
}
    const ans_key =[1,2,1,1,2,2] // 👈 Quiz Solution
    let ans = []; // 👈 User ans is stored here
    let index = 0; // 👈 Index number for array
    const points = 1; // 👈 Score granted after each correct answer
    let uname;// 👈 Variable to store 'Uername' given by user
    let quizScore = 0; // 👈 Variable to store quiz score

  // 👇 Taking input from the user
  uname = rls.question("User Name: ")

  var quiz_Welcome_Msg = " ***** Welcome to 'Do You Know Me' Quiz ***** ";

  var quiz_intro = "Hello Everyone 👋, My name is 'Harsh Vyapari'. This quiz will give a brief idea about me.The quiz is based on yes or no questions, for yes option enter \'1\' and for no option enter \'2\'.\n\nIf other than 👆 above value is entered, the score for that question by default, will be zero";

  // 🪝 I just want to take my own spin for welcome message
  // So, I imported 'cli-alerts' package from npm 
  // 👇 
  alerts({
    type: 'info',
    msg: quiz_Welcome_Msg
  })

  console.log("\n"+ quiz_intro)

    function scoreCalc(){
      ans[index] = Number(rls.question("=>"));
      if(ans[index] == 1 || ans[index] == 0)
      {
      return quizScore += (ans[index] == ans_key[index]) ? points : 0
      }
      else{
        ans[index] = 0
        return quizScore += 0
      }
      
    }

    // Quiz Starts

    // Question 1: Am I very emotional?
    console.log("\nA. "+question_sheet.q0)
    console.log("\nUsername: " + uname + " Score(Upto Previous Question): "+scoreCalc())
    index++

    // Question 2: Am I funny?
    console.log("\nB. "+question_sheet.q1)
    console.log("\nUsername: " + uname + " Score(Upto Previous Question): "+scoreCalc())
    index++
    
    // Question 3: Am I a foodie?
    console.log("\nC."+question_sheet.q2)
    console.log("\nUsername: "+uname+" Score(Upto Previous Question): "+scoreCalc())
    index++
    
    // Question 4: Am I love playing video games?
    console.log("\nD. "+question_sheet.q3)
    console.log("\nUsername: " + uname + " Score(Upto Previous Question): "+scoreCalc())
    index++

    // Question 5: Am I a short tempered guy?
    console.log("\nE. "+question_sheet.q4)
    console.log("\nUsername: " + uname + " Score(Upto Previous Question): "+scoreCalc())
    index++

    // Question 6: Am I talk too much?
    console.log("\nF. "+question_sheet.q5)
    console.log("\nUsername: " + uname + " Score(Upto Previous Question): " + scoreCalc())
    index++
    
    // Quiz Ends

    console.log("\nAnswer for the quiz: ")
    for (var i = 0; i < 6; i++) {
      console.log((i + 1) + ". " + ans_key[i])
    }

    console.log("\nYour answer: ")
    for (var i = 0; i < 6; i++) {
      console.log((i + 1) + ". " + ans[i])
    }

    alerts({type: 'info' ,msg:"\nUsername: "+uname+"\nTotal Score: " + quizScore})

    // We are using ternery operator for conditional display 
    // of response
    console.log((quizScore >= 3)? "You know me very well":"You don't know me very well")