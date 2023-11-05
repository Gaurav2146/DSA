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
   
     console.log(sum,"sum");
   
    let val = Math.floor(sum/2);
   
    console.log(val,"val");
   
    let negative = false;
   
    if(val < 0)
    {
      negative = true;
    }
   
    let min_val = solve(val,nums,0,negative);
   
    console.log(min_val,"min_val");
   
    if(val < 0)
    {
      if(sum % 2 != 0 )
      {
        return (val - min_val) + 1;
      }
      else
      {
       return (val - min_val);
      }
    }
    else
    {
      if(sum % 2 != 0 )
      {
        return 2*min_val + 1;
      }
      else
      {
       return 2*min_val;
      }
    }
   
   
   };
   
   function solve(data:number,nums:number[],index:number,negative:boolean):number
   {
      if(index >= nums.length)
      {
          return data;
      }
   
      let res1 = Number.MAX_SAFE_INTEGER;
   
      if(negative == false && data >= nums[index])
      {
        res1 = solve(data - nums[index],nums,index+1,negative);
      }
      else if(negative == true && data <= nums[index] && nums[index]<0)
      {
        res1 = solve(data - nums[index],nums,index+1,negative);
      }
   
      let res2 = solve(data,nums,index+1,negative);
   
      return Math.min(res1,res2);
   
   }