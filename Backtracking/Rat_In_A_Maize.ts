
/**
 * @param {number[][]} m
 * @param {number} n
 * @return {string[]}
 */

class Rat_In_A_Maize {
    findPath(m: number[][], n: number) {
        //code here

        let visited = new Array(n);

        for (let i = 0; i < n; i++) {
            visited[i] = new Array(n).fill(0);
        }

        let result: string[] = [];

        let res = "";

        if (m[0][0] == 1) {
            visited[0][0] = 1;
            this.solve(visited, 0, 0, m, n, res, result);
            visited[0][0] = 0;
        }

        return result;
    }


    solve(visited: number[][], row: number, column: number, matrix: number[][], n: number, res: string, result: string[]) {

        if (row == n - 1 && column == n - 1) {
            result.push(res);
            return;
        }

        //DOWN
        if (this.isAllowed(visited, row + 1, column, matrix, n)) {
            visited[row + 1][column] = 1;
            this.solve(visited, row + 1, column, matrix, n, res + 'D', result);
            visited[row + 1][column] = 0;
        }

        //LEFT
        if (this.isAllowed(visited, row, column - 1, matrix, n)) {
            visited[row][column - 1] = 1;
            this.solve(visited, row, column - 1, matrix, n, res + 'L', result);
            visited[row][column - 1] = 0;
        }

        //RIGHT
        if (this.isAllowed(visited, row, column + 1, matrix, n)) {
            visited[row][column + 1] = 1;
            this.solve(visited, row, column + 1, matrix, n, res + 'R', result);
            visited[row][column + 1] = 0;
        }

        //UP
        if (this.isAllowed(visited, row - 1, column, matrix, n)) {
            visited[row - 1][column] = 1;
            this.solve(visited, row - 1, column, matrix, n, res + 'U', result);
            visited[row - 1][column] = 0;
        }
    }


    isAllowed(visited: number[][], row: number, column: number, matrix: number[][], n: number) {

        if (row < 0 || column < 0) {
            return false;
        }

        if (row >= n || column >= n) {
            return false;
        }

        if (visited[row][column] == 1) {
            return false;
        }

        if (matrix[row][column] == 0) {
            return false;
        }

        return true;
    }
}
