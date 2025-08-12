// Write C program to find cube of a number using function.

let prompt = require('prompt-sync') ();

let cubenumber = parseInt(prompt("Enter is find cube of number"));

function calculateCube(num) {
    return  num * num * num;
}

let number = 5;
let cubeResult = calculateCube(number);
console.log(`The Cube of ${number} is : ${cubeResult}`);


let anothernumber = 10;
let anothercubeResult = calculateCube(anothernumber);
console.log(`The cube of ${anothernumber} is : ${anothercubeResult}`);

