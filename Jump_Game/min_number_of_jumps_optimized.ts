function jumpGame(nums: number[]): number {

    if(nums.length == 1)
    {
        return 0;
    }
 
    if(nums[0] == 0)
    {
        return -1;
    }
    
    let range = nums[0];
    let step = nums[0];
    let jump = 1;
 
    for(let i=1; i < nums.length - 1; i++)
    {
      
      range = Math.max(range, i + nums[i]);
      step--;
 
      if(step == 0)
      {
          if(i >= range)
          {
              return -1;
          }
         
          jump++;
          step = range - i;
      }
    }
 
    return jump;
 };