 //Right angeled star pattern. 
 
 function printStarTriangle(rows) {
        for (let i = 1; i <= rows; i++) {
            let rowPattern = '';
            for (let j = 1; j <= i; j++) {
                rowPattern += '* ';
            }
            console.log(rowPattern);
        }
    }
    printStarTriangle(5);