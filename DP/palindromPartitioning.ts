function minCut(s: string): number {

    let palindomDP:number[][] = [];
    
    for(let i=0; i< s.length;i++)
    {
        let arr = []
        for(let j=0; j < s.length;j++)
        {
          arr.push(0);
        }
        palindomDP.push(arr);
    }
    
    if(palindomDP[0][s.length-1]>0)
    {
      return 0;
    }
    
    claculatePalindromicSubstrings(s,palindomDP);
    
    let DP:number[][] = [];
    
    for(let i=0; i<s.length;i++)
    {
        let arr = []
        for(let j=0; j < s.length;j++)
        {
          arr.push(-1);
        }
        DP.push(arr);
    }
    
    return calculate(s,0,s.length-1,DP,palindomDP);
    
    };
    
    function calculate(s:string,i:number,j:number,DP:number[][],palindomDP:number[][]):number
    {
    
    if(i>=j)
    {
        return 0;
    }
    
    if( palindomDP[i][j] > 0 )
    {
      return 0;
    }
    
    if(DP[i][j]!=-1)
    {
      return DP[i][j];
    }
    
    let min = Number.MAX_SAFE_INTEGER;
    
    for(let k=i; k < j;k++ )
    {
    
    if(DP[i][k]==-1)
    {
      DP[i][k] = calculate(s,i,k,DP,palindomDP)
    }
    
    if(DP[k+1][j]==-1)
    {
      DP[k+1][j] = calculate(s,k+1,j,DP,palindomDP);
    }
    
    let temp = 1 + DP[i][k] + DP[k+1][j];
    
    if(temp < min)
    {
        min = temp;
    }
    }
    
    DP[i][j] = min;
    return min;
    
    }
    
    
    function claculatePalindromicSubstrings(s:string,palindromicDP:number[][])
    {
    
    for(let i=0; i<s.length;i++)
    {
        palindromicDP[i][i] = 1;
    }
    
    for(let i=0; i<s.length-1;i++)
    {
        if(s[i]==s[i+1])
        {
           palindromicDP[i][i+1] = 2;
        }
        
    }
    
    for(let i = s.length - 1 - 2; i >= 0; i--)
    {
        for(let j=i+2; j<s.length;j++)
        {
         
           if(s[i]==s[j] && palindromicDP[i+1][j-1] > 0)
           {
             
             palindromicDP[i][j] = 2 + palindromicDP[i+1][j-1];
             
           }
           else
           {
              palindromicDP[i][j] = 0;
           }
          
        }
    }
    
    }