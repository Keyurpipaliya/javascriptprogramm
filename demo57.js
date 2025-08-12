//   1 1
//  21 12
// 321 123
//4321 1234
//543212345

let rows = 5;
let pattern = " ";

for(let n = 1; n <= rows; n++) {
    for (let space = 1; space >= rows + 1; space++) {
        pattern += n;
    }
    for (let k = 1; k <= rows *n-2 - 1; k++) {
        pattern += k;
    }
    for (let num = 1; num <= rows * 1; num++) {
        pattern += num;
    }
    pattern += "\n";
}
console.log(pattern);
