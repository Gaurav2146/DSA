/**
 Do not return anything, modify board in-place instead.
 */
function solveSudoku(board: string[][]): void {

    let empty_space = [];

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] == '.') {
                empty_space.push({ row: i, column: j });
            }
        }
    }

    solve(board, empty_space, 0);
};

function solve(board: string[][], empty_space: { row: number, column: number }[], index: number): boolean {

    if (index >= empty_space.length) {
        return true;
    }

    let row = empty_space[index].row;
    let column = empty_space[index].column;

    let result_found = false;

    if (board[row][column] == '.') {
        for (let k = 1; k <= 9; k++) {
            let res = isValid(board, row, column, k.toString());

            if (res) {
                board[row][column] = k.toString();

                let isSolution = solve(board, empty_space, index + 1);

                if (isSolution == false) {
                    board[row][column] = '.';
                }
                else {
                    result_found = true;
                }
            }

        }

    }

    return result_found;
};

function isValid(board: string[][], row: number, column: number, key: string) {
    let range = { row_start: 0, row_end: 0, column_start: 0, column_end: 0 }

    if (row >= 0 && row <= 2) {
        if (column >= 0 && column <= 2) {
            range = { row_start: 0, row_end: 2, column_start: 0, column_end: 2 };
        }
        else if (column >= 3 && column <= 5) {
            range = { row_start: 0, row_end: 2, column_start: 3, column_end: 5 };
        }
        else if (column >= 6 && column <= 8) {
            range = { row_start: 0, row_end: 2, column_start: 6, column_end: 8 };
        }
    }
    else if (row >= 3 && row <= 5) {
        if (column >= 0 && column <= 2) {
            range = { row_start: 3, row_end: 5, column_start: 0, column_end: 2 };
        }
        else if (column >= 3 && column <= 5) {
            range = { row_start: 3, row_end: 5, column_start: 3, column_end: 5 };
        }
        else if (column >= 6 && column <= 8) {
            range = { row_start: 3, row_end: 5, column_start: 6, column_end: 8 };
        }
    }
    else if (row >= 6 && row <= 8) {
        if (column >= 0 && column <= 2) {
            range = { row_start: 6, row_end: 8, column_start: 0, column_end: 2 };
        }
        else if (column >= 3 && column <= 5) {
            range = { row_start: 6, row_end: 8, column_start: 3, column_end: 5 };
        }
        else if (column >= 6 && column <= 8) {
            range = { row_start: 6, row_end: 8, column_start: 6, column_end: 8 };
        }
    }

    ///////////////////////////////////////////////////////////////////////
    // Check if same key is already present in 3*3 matrix.
    for (let i = range.row_start; i <= range.row_end; i++) {
        for (let j = range.column_start; j <= range.column_end; j++) {
            if (board[i][j] == key) {
                return false;
            }
        }
    }

    //Check if key is already present in row 
    for (let i = 0; i < board[0].length; i++) {
        if (board[row][i] == key) {
            return false;
        }
    }

    //Check if key is already present in column
    for (let i = 0; i < board.length; i++) {
        if (board[i][column] == key) {
            return false;
        }
    }

    return true;
}


let board = [["5","3",".",".","7",".",".",".","."],
             ["6",".",".","1","9","5",".",".","."],
             [".","9","8",".",".",".",".","6","."],
             ["8",".",".",".","6",".",".",".","3"],
             ["4",".",".","8",".","3",".",".","1"],
             ["7",".",".",".","2",".",".",".","6"],
             [".","6",".",".",".",".","2","8","."],
             [".",".",".","4","1","9",".",".","5"],
             [".",".",".",".","8",".",".","7","9"]]

solveSudoku(board);

console.log(board);