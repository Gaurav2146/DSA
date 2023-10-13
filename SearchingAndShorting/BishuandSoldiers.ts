// Problem
// Bishu went to fight for Coding Club. There were N soldiers with various powers. There will be Q rounds to fight and in each round, Bishu's power will be varied. With power M, Bishu can kill all the soldiers whose power is less than or equal to M(<=M). After each round, All the soldiers who are dead in the previous round will reborn. Such that in each round there will be N soldiers to fight. As Bishu is weak in mathematics, help him to count the number of soldiers that he can kill in each round and the total sum of their powers.

// INPUT:

// The first line of the input contains N, the number of soldiers.

// The second line contains an array of N numbers denoting the power of each soldier

// This third line contains Q, which denotes the number of rounds.

// Q lines follow, each line having one number denoting the power of Bishu.

// OUTPUT:

// For each round, the output should be an array of two numbers. The first number should be the number of soldiers that Bishu can beat, and the second number denotes the cumulative strength of all the soldiers that Bishu can beat.

// CONSTRAINTS:

// 1<=N<=10000

// 1<=power of each soldier<=100

// 1<=Q<=10000

// 1<=power of bishu<=100

// Sample Input
// 7
// 1 2 3 4 5 6 7
// 3
// 3
// 10
// 2
// Sample Output
// 3 6
// 7 28
// 2 3

class BishuandSoldiers {

    arrayOfSoldiers: number[] = [];
    totalPowersum: number[] = [];

    constructor(arrayOfSoldiers: number[]) {
        this.arrayOfSoldiers = arrayOfSoldiers;
        this.totalPowersum = new Array(arrayOfSoldiers.length);

        this.arrayOfSoldiers.sort((a, b) => a - b);

        this.totalPowersum[0] = this.arrayOfSoldiers[0];

        for (let i = 1; i < arrayOfSoldiers.length; i++) {
            this.totalPowersum[i] = this.totalPowersum[i - 1] + this.arrayOfSoldiers[i];
        }
    }

    calculate(BishuPower: number): { numberOfSoldiers: number, power: number } {
        for (let i = 0; i < this.arrayOfSoldiers.length; i++) {
            if (this.arrayOfSoldiers[i] == BishuPower) {
                return { numberOfSoldiers: i + 1, power: this.totalPowersum[i] };
            }
            else if (this.arrayOfSoldiers[i] > BishuPower) {
                return { numberOfSoldiers: i, power: this.totalPowersum[i - 1] };
            }
        }

        return {
            numberOfSoldiers: this.arrayOfSoldiers.length,
            power: this.totalPowersum[this.totalPowersum.length - 1]
        };
    }
}

console.log(new BishuandSoldiers([1, 2, 3, 4, 5, 6, 7]).calculate(10));


