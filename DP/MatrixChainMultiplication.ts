class MatrixChainMultiplication {

    matrixMultiplication(arr: number[], n: number) {

        return this.solve(arr, 1, n - 1);

    }

    solve(arr: number[], i: number, j: number) {

        if (i >= j) {
            return 0;
        }

        let minCost = Number.MAX_SAFE_INTEGER;

        for (let k = i; k < j; k++) {

            let temp = this.solve(arr, i, k) + this.solve(arr, k + 1, j) + arr[i - 1] * arr[k] * arr[j];

            if (temp < minCost) {
                minCost = temp;
            }
        }

        return minCost;
    }
}