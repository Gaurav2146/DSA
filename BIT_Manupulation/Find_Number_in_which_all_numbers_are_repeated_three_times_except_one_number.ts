//You have to Find a Number from an array in which all numbers are repeated three times except one number.

class numberRepeatedTreeTimes {
    solve(input: number[]) {
        let array = new Array(32).fill(0);
        for (let i = 0; i < input.length; i++) {
            this.addBitsToArray(array, input[i]);
        }
        for (let i = 0; i < array.length; i++) {
            array[i] = array[i] % 3;
        }
        return this.convertBitToNumber(array);
    }

    convertBitToNumber(input: number[]) {
        let pow = 0;
        let len = input.length;
        let res = 0
        let i = 0;

        while (i < len) {
            if (input[i] == 1) {
                res = res + Math.pow(2, pow);
            }
            pow++;
            i++;
        }
        return res;
    }

    addBitsToArray(array: number[], num: number) {
        let index = 1;
        if (num & 1) {
            array[0] = array[0] + 1;
        }

        while (num != 0) {
            let bit = (num >> 1) & 1;
            num = num >> 1;
            array[index] = array[index] + bit;
            index++;
        }
    }
}

console.log(new numberRepeatedTreeTimes().solve([1, 1, 1, 2, 3, 3, 3]));