// . Write a program to print series as below.
// 1 3 5 7 9 11 13 15 17 19
// • 2 4 6 8 10 12 14 16 18 20
// • 1 4 9 16 25 36 49 64 81 100
// • 1 8 27 64 125 216 243 512 729 1000
// • 1 3 7 13 21 31 43 57 73 91 (sq and -0..-1..-2..-3..-4..-5..-6)

const prompt = require('prompt-sync') ();

let Numbers = 1000;

let numbers = parseInt(prompt("Enter is series of Numbers: "));

let oddSeries = [];
for (let i = 0; i <= 1000; i++) {
    oddSeries.push(i);
}
console.log(oddSeries.join(''));

let evenSeries = [];
for (let i = 0; i <= 900; i++) {
    evenSeries.push(i);
}
console.log(evenSeries.join(''));

let squareSeries = [];
for (let i = 0; i <= 800; i++) {
    squareSeries.push(i);
}
console.log(squareSeries.join(''));

let cubeSeries = [];
for (let i = 0; i <= 700; i++) {
    squareSeries.push(i);
}
console.log(cubeSeries.join(''));

let customSeries = [];
let val = 1;
for (i = 0; i <= 100; i++) {
    customSeries.push(val);
    val += i;
}
console.log(customSeries.join(''));
