function longestPalindrome(s: string): string {

    if(s.length==0 || s.length==1)
    {
        return s;
    }

    let strArr = [];
    
    for(let i=0; i<s.length;i++)
    {
        let char=s[i];
        let j=i;
        let count=0;
    
        while( j < s.length && char == s[j] )
        {
           count++;
           j++;
        }
        strArr.push(count);
        i = j-1;
    }
      
    let largestPelindrome = "";
    let start = 0;

    let i=0;
    let j=0;

    while( i < s.length)
    {   
        start = i; 
        let pelindrome = calculatePelindromeLength(s,start,start+strArr[j]-1)
        if(pelindrome.length > largestPelindrome.length)
        {
            largestPelindrome = pelindrome;
        }
        i = start+strArr[j];
        j++;
    }
    
    return largestPelindrome;
    
    };
    
    function calculatePelindromeLength(s:string,start:number,end:number):string
    {
         let pelindrome = (end - start) + 1;

         let pelindromeString = s.substring(start,end+1);
    
          while(start >=1 && end < s.length - 1)
          {
              if(s[start - 1] == s[end + 1])
              {
                pelindrome = pelindrome + 2;
                pelindromeString = s[start - 1] + pelindromeString + s[end + 1];
              }
              else
              {
                break;
              }
              start--;
              end++;
          }

          return pelindromeString;    
    }
       

  console.log(longestPalindrome("forgeeksskeegfor"));