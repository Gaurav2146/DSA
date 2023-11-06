// 322. Coin Change
// Medium
// 18K
// 408
// Companies
// You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

// Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

// You may assume that you have an infinite number of each kind of coin.

 

// Example 1:

// Input: coins = [1,2,5], amount = 11
// Output: 3
// Explanation: 11 = 5 + 5 + 1
// Example 2:

// Input: coins = [2], amount = 3
// Output: -1
// Example 3:

// Input: coins = [1], amount = 0
// Output: 0
 

// Constraints:

// 1 <= coins.length <= 12
// 1 <= coins[i] <= 231 - 1
// 0 <= amount <= 104

function coinChange(coins: number[], amount: number): number {

    let row = amount + 1;

    let column = coins.length + 1;

           //code here
    let DP = new Array(row);

    for (let i = 0; i < row; i++) {
        DP[i] = new Array(column);

        for (let j = 0; j < column; j++) {
                DP[i][j] = -1;
        }
    }
    
    let result = solve(coins,amount,0,0,DP);

    if(result < Number.MAX_SAFE_INTEGER - 100)
    {
       return result;
    }
    else
    {
       return -1;
    }

};

function solve(coins: number[], amount: number,index:number,output:number,DP:number[][]):number
{
    if(output == amount)
    {
        return 0;
    }

    if(output > amount)
    {
        return Number.MAX_SAFE_INTEGER - 100;
    }
   
    if(index >= coins.length)
    {
        return Number.MAX_SAFE_INTEGER - 100;
    }

    if(DP[output][index] != -1)
    {
        return DP[output][index];
    }

    let res1 = 1 + solve(coins, amount,index,output + coins[index], DP);

    let res2 = solve(coins, amount,index+1,output, DP);
 
    let result = Math.min(res1,res2)

    return DP[output][index] = result;
}

