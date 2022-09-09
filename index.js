// Author: Harsh Vyapari
// Github ID: https://github.com/harshv1741/
// mark 1: To create a 'Do You Know Me' CLI quiz app on Node.js
// Scripting Language: JavaScript

var rls = require('readline-sync')
const alerts = require('cli-alerts')

// 👇 Question Sheets for questions
var question_sheet = [
    // This quiz is yes no type quiz,
    {
        q: "Am I very emotional type of guy?\n1.yes\n2.no",
        a: 1
    },

    {
        q: "Am I boring?\n1.yes\n2.no",
        a: 2
    },

    {
        q: "Am I a foodie?\n1.yes\n2.no",
        a: 1
    },

    {
        q: "Am I love playing video games?\n1.yes\n2.no",
        a: 1
    },

    {
        q: "Am I a short-tempered guy?\n1.yes\n2.no",
        a: 2
    },

    {
        q: "Am I talk too much?\n1.yes\n2.no",
        a: 1
    },

    {
        q: "Am I a music enthusiastic?\n1.yes\n2.no",
        a: 1
    }
]

let ans = []; // 👈 User ans is stored here
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

console.log("\n" + quiz_intro)

function scoreCalc(index) {
    ans[index] = Number(rls.question("=>"));
    if (ans[index] == 1 || ans[index] == 0) {
        quizScore += (ans[index] == current.a) ? points : 0
    }
    else {
        ans[index] = 0
        quizScore += 0
    }

    return quizScore

}

// Quiz Starts

// Question 1: Am I very emotional?
for (var i = 0; i < question_sheet.length; i++) {
    var current = question_sheet[i]
    console.log((i+1)+". " + current.q)
    console.log("Username: " + uname + " Score (Upto Previous Question): " + scoreCalc(i)+"\n")
}

console.log("\nAnswer for the quiz: ")
for (var i = 0; i < question_sheet.length; i++) {
    console.log((i + 1) + ". " +question_sheet[i].a)
}

console.log("\nYour answer: ")
for (var i = 0; i < question_sheet.length; i++) {
    console.log((i + 1) + ". " + ans[i])
}

alerts({ type: 'info', msg: "\nUsername: " + uname + "\nTotal Score: " + quizScore })

// We are using ternery operator for conditional display 
// of response
console.log((quizScore >= 3) ? "You know me very well" : "You don't know me very well")