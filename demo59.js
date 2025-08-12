//555555555
//4444444
//33333
//222
//1

let prompt = require('prompt-sync') ();

let num = parseInt(prompt("Enter is 5 Characters number of pattern : "));
let rows = 5;
let pattern = "";

for (let n = 1; n <= rows; n++) {
    for (let space = 1; space >= rows + 1 * n; space++) {
        pattern += n;
    }
    for (let k = 1; k <= rows * n - 2; k++) {
        pattern += k;
    }
    for (let num = 1; num <= rows; num--) {
        pattern += num;
    }
    pattern += "\n";

    console.log(pattern);
}   