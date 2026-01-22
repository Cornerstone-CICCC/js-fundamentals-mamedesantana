/*
Write a named function expression that stores the function in a variable called cry and returns "boohoo!". Don't forget to call the function using the variable name, not the function name:

cry();
Returns: boohoo!
*/

const cry = function(num) {
    let result = "";
    for (let i = 0; i < num; i++) {
        result += "boohoo!";
    }
    return result;
};
    
console.log(cry(1));