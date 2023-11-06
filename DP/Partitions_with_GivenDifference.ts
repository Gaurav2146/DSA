// Partitions with Given Difference
// MediumAccuracy: 36.76%Submissions: 43K+Points: 4
// Hiring Challenge for Working Professionals on 10th November.
// Apply to 6 Companies through 1 Contest! 

// banner
// Given an array arr, partition it into two subsets(possibly empty) such that their union is the original array. Let the sum of the element of these two subsets be S1 and S2. 

// Given a difference d, count the number of partitions in which S1 is greater than or equal to S2 and the difference S1 and S2 is equal to d. since the answer may be large return it modulo 109 + 7.

// Example 1:

// Input:
// n = 4, d = 3
// arr[] =  { 5, 2, 6, 4}
// Output:
// 1
// Explanation:
// There is only one possible partition of this array. Partition : {6, 4}, {5, 2}. The subset difference between subset sum is: (6 + 4) - (5 + 2) = 3.
// Example 2:

// Input:
// n = 4, d = 0 arr[] = {1, 1, 1, 1} Output: 6 
// Your Task:
// You don't have to read input or print anything. Your task is to complete the function countPartitions() which takes the integer n and d and array arr and returns the count of partitions.

// Constraint:
// 1 <= n <= 500
// 0 <= d  <= 2500
// 0 <= arr[i] <= 50

// Expected Time Complexity: O( N * MAX_SUM), where N and MAX_SUM denote the number of elements in the array and the maximum possible sum of array elements.
// Expected Space Complexity: O( N * MAX_SUM), where N and MAX_SUM denote the number of elements in the array and the maximum possible sum of array elements.

class Partitions_with_GivenDifference{

        countPartitions(n:number, d:number, arr:number[]){
        // Code here
        let sum = 0;
        
        for(let i=0; i < n; i++)
        {
            sum = (sum + arr[i]) % (Math.pow(10, 9) + 7);
        }
        
        let num = (sum - d)/2;
        
        if(num%1 > 0)
        {
            return 0;
        }
        else
        {
            
           let DP = new Map<string,number>();   
           
           return this.solve(n, arr, num, 0,0,DP);
        }
    }
    
    solve(n:number, arr:number[], number:number, index:number, result:number, DP:Map<string,number> ):number
    {
        if(result > number)
        {
            return 0;
        }
        
        if(result == number)
        {
            return 1;
        }
        
        if(index >= n)
        {
            return 0;
        }
        
        let key = index + "-" + result;
        
        if(DP.has(key))
        {
            return DP.get(key);
        }
        
        let res1 = this.solve(n, arr, number, index+1, result + arr[index],DP);
        
        let res2 = this.solve(n, arr, number, index+1, result,DP);
        
        DP.set(key , res1 + res2);
        
        return res1 + res2;
    }
}

console.log( new Partitions_with_GivenDifference().countPartitions(19,3,[5, 2, 6, 4,2,5,3,12,15,23,43,1,98,43,77,56,47,81,72]) )