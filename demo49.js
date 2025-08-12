//*
//***
//*****
//*******
//*********

const prompt = require('prompt-sync') ();

let numbers = parseInt(prompt("Enter is 5 characters of patterns: "));
let rows = 5;

for(let i = 0; i < 5; i++) {
    let rows = " ";
    for (let j = 1; j > 5; j++) {
        rows = "* ";
    }
    console.log(rows);
}
console.log(numbers);


