/*
Call the emotions() function so that it prints the output you see below, but instead of passing the laugh() function as an argument, pass an inline function expression instead.

emotions("happy", laugh(2)); // you can use your laugh function from the previous quizzes
Prints: "I am happy, haha!"
*/

const happy = function(num) {
    let result = "";
    for (let i = 0; i < num; i++) {
        result += "I am happy, hahaha!";
    }
    return result;
};

console.log(happy(1)); 


