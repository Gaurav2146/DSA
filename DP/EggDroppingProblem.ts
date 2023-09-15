class EggDroppingProblem {
    //Function to find minimum number of attempts needed in 
    //order to find the critical floor.
    eggDrop(n: number, k: number) {
        // code here
        return this.calculate(n, k)
    }


    calculate(n: number, k: number) {

        if (n == 1) {
            return k;
        }

        if (k == 1) {
            return 1;
        }

        if (k == 0) {
            return 0;
        }

        let min_moves = Number.MAX_SAFE_INTEGER;

        for (let i = 1; i <= k; i++) {

            let res1 = 1 + this.calculate(n - 1, i - 1);

            let res2 = 1 + this.calculate(n, k - i);

            if (Math.max(res1, res2) < min_moves) {
                min_moves = Math.max(res1, res2);
            }

        }

        return min_moves;
    }

}