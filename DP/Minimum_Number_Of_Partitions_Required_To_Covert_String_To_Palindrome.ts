
class Minimum_Number_Of_Partitions_Required_To_Covert_String_To_Palindrome
{

    calculateMinimumCutsRequires(str:string)
    {
      this.solve(str,0,str.length-1);
    }

    solve(s:string,start:number,end:number)
    {
        if(start >= end)
        {
            return 0;
        }

        if(this.isPalindrome(s.substring(start,end+1)) == true)
        {
          return 0;
        }

        let min = Number.MAX_SAFE_INTEGER;

        for(let k=start; k < end; k++)
        {
           let res = 1 + this.solve(s,start,k+1) + this.solve(s,k+1,end);

           if(res < min)
           {
            res = min;
           }
        }

        return min;
    }

    isPalindrome(s:string)
    {
        let i=0;
        let j = s.length -1;
      
        let flag = true;
      
        while(i <= j)
        {
          if(s[i]!=s[j])
          {
              flag = false;
              break;
          }
          i++;
          j--;
        }
      
        return flag;
    }
}