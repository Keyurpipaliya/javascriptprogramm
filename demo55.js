//   54321
//   5432
//   543
//   54
//   5

let rows = 5;
let pattern = "";

for (let n = 1; n <= rows; n++) {
    for (let num = rows; num >= n; num--) {
        pattern += num;
    }
    pattern += "\n";
}
console.log(pattern);
