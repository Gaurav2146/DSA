// 2035. Partition Array Into Two Arrays to Minimize Sum Difference
// Hard

// You are given an integer array nums of 2 * n integers. You need to partition nums into two arrays
// of length n to minimize the absolute difference of the sums of the arrays. 
//To partition nums, put each element of nums into one of the two arrays.
// Return the minimum possible absolute difference.

// Example 1:

// example-1
// Input: nums = [3,9,7,3]
// Output: 2
// Explanation: One optimal partition is: [3,9] and [7,3].
// The absolute difference between the sums of the arrays is abs((3 + 9) - (7 + 3)) = 2.
// Example 2:

// Input: nums = [-36,36]
// Output: 72
// Explanation: One optimal partition is: [-36] and [36].
// The absolute difference between the sums of the arrays is abs((-36) - (36)) = 72.
// Example 3:

// example-3
// Input: nums = [2,-1,0,4,-2,-9]
// Output: 0
// Explanation: One optimal partition is: [2,4,-9] and [-1,0,-2].
// The absolute difference between the sums of the arrays is abs((2 + 4 + -9) - (-1 + 0 + -2)) = 0.
 

// Constraints:

// 1 <= n <= 15
// nums.length == 2 * n
// -107 <= nums[i] <= 107

function minimumDifference(nums: number[]): number {
    
    if(nums.length == 2)
    {
      return Math.abs(nums[0] - nums[1]);
    }
    
    let sum = 0;
    
    for(let i=0; i < nums.length; i++)
    {
        sum = sum + nums[i];
    }
    
    let value = Math.floor( sum/2 );
    
    let allowed_length = (nums.length)/2;
    
    let fist_data = solve(nums,value,0,0,0,allowed_length);
    
    let second_data = sum - fist_data;
    
    return Math.abs(second_data - fist_data);
    };
    
    function solve(nums:number[],value:number,output:number,current_size:number,index:number,allowed_length:number):number
    {
    
      if(current_size == allowed_length)
      {
         return output;
      }
    
      if(index >= nums.length)
      {
          return Number.MIN_SAFE_INTEGER;
      }
     
       let res1 = solve(nums,value,output + nums[index] , current_size+1, index+1, allowed_length);
    
       let res2 = solve(nums, value, output, current_size, index+1, allowed_length);
    
       if(Math.abs(value - res1) >  Math.abs(value - res2))
       {
          return res2;
       }
       else
       {
          return res1;
       }  
    }