function jump(nums: number[]): number {
    return min_jumps(nums,0,0);
   };
   
   function min_jumps(nums:number[],output:number,index:number)
   {
      
     if(index == nums.length - 1)
     {
         return output;
     }
   
     let min = Number.MAX_SAFE_INTEGER;
   
     for(let i=1; i <= nums[index]; i++)
     {
       min = Math.min(min,min_jumps(nums,output+1,index+i));
     }
      return min;
   }