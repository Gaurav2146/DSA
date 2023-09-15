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

        //we can start throwing from 1st floor to kth floor. we can not throw from 0th floor.
        for (let i = 1; i <= k; i++) {

            let res1 = 1 + this.calculate(n - 1, i - 1);

            let res2 = 1 + this.calculate(n, k - i);

            // We have to minimize the number of attempts in worst case that's why we have taken maximum
            // of both scenarios and then we taking minimum of them.
            if (Math.max(res1, res2) < min_moves) {
                min_moves = Math.max(res1, res2);
            }

        }

        return min_moves;
    }

}