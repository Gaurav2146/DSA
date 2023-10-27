function solveNQueens(n: number): string[][] {

    let chessboard = new Array(n);

    for (let i = 0; i < n; i++) {
        chessboard[i] = new Array(n).fill(".");
    }

    let all_solutions:string[][] = [];

    for (let i = 0; i < n; i++) {
        if (isAllowed(i, 0, chessboard, n)) {
            chessboard[i][0] = "Q";
            solve(chessboard, 1, n, all_solutions);
            chessboard[i][0] = ".";
        }
    }

    return all_solutions;
};

function solve(chessboard: string[][], column: number, n: number, all_solutions: string[][]) {

    if (column == n) {
        let output = [];
        for (let i = 0; i < n; i++) {
            let res = "";

            for (let j = 0; j < n; j++) {
                res = res + chessboard[i][j];
            }
            output.push(res);
        }
        all_solutions.push(output);
        return;
    }

    for (let i = 0; i < n; i++) {
        if (isAllowed(i, column, chessboard, n)) {
            chessboard[i][column] = "Q";
            solve(chessboard, column + 1, n, all_solutions);
            chessboard[i][column] = ".";
        }
    }
}


function isAllowed(row: number, column: number, chessboard: string[][], n: number) {

    //check for row if any queen is present
    for (let i = 0; i < column; i++) {
        if (chessboard[row][i] == "Q") {

            return false;
        }
    }

    //Check for upper diagonal
    let i = row;
    let j = column;

    while (i >= 0 && j >= 0) {
        if (chessboard[i][j] == "Q") {
            return false;
        }
        i--;
        j--;
    }

    //Check for lower diagonal
    i = row;
    j = column;

    while (i < n && j >= 0) {
        if (chessboard[i][j] == "Q") {
            return false;
        }
        i++;
        j--;
    }

    return true;
}