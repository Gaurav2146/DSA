// You are given an integer array nums and an integer target.

// You want to build an expression out of nums by adding one of the symbols '+' and '-' before each integer in nums and then concatenate all the integers.

// For example, if nums = [2, 1], you can add a '+' before 2 and a '-' before 1 and concatenate them to build the expression "+2-1".
// Return the number of different expressions that you can build, which evaluates to target.

 

// Example 1:

// Input: nums = [1,1,1,1,1], target = 3
// Output: 5
// Explanation: There are 5 ways to assign symbols to make the sum of nums be target 3.
// -1 + 1 + 1 + 1 + 1 = 3
// +1 - 1 + 1 + 1 + 1 = 3
// +1 + 1 - 1 + 1 + 1 = 3
// +1 + 1 + 1 - 1 + 1 = 3
// +1 + 1 + 1 + 1 - 1 = 3
// Example 2:

// Input: nums = [1], target = 1
// Output: 1
 

// Constraints:

// 1 <= nums.length <= 20
// 0 <= nums[i] <= 1000
// 0 <= sum(nums[i]) <= 1000
// -1000 <= target <= 1000

function findTargetSumWays(nums: number[], target: number): number { 
    let map = new Map<string,number>();
    return solve(nums,target,0,0,map);
    };
    
    function solve(nums: number[], target: number,index:number,output:number,map:Map<string,number>):number
    {
       let key = index + "-" + output; 
    
       if(target == output && index == nums.length)
       {
           return 1;
       }
    
       if(index >= nums.length)
       {
           return 0;
       }
    
       if(map.has(key))
       {
        return map.get(key);
       }
    
       let res1 = solve(nums, target,index+1,output - nums[index],map);
       let res2 = solve(nums, target,index+1,output + nums[index],map);
    
       map.set(key,res1 + res2) ;
       return res1+res2;
    }