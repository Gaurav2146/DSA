// Given a string s, return the longest 
// palindromic
 
// substring
//  in s.

// Example 1:

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.
// Example 2:

// Input: s = "cbbd"
// Output: "bb"
 

// Constraints:

// 1 <= s.length <= 1000
// s consist of only digits and English letters.

function longestPalindrome(s: string): string {
    
    let n = s.length;
    let DP = new Array(n);

    for(let i=0; i < DP.length; i++)
    {
        DP[i] = new Array(n).fill(0);
    }

    for(let i=0; i < n - 1; i++)
    {
       DP[i][i] = 1;
       let j = i+1; 
       if(s[i] == s[j])
       {
         DP[i][j] = 1;
       } 
    }
    DP[n-1][n-1] = 1;

    for(let i=n-1; i >=0; i--)
    { 
      for(let j=i; j < n; j++)
      {
        if(s[i] == s[j])
        {
            if(i+1 < n && j-1 > 0)
            {
               if(DP[i+1][j-1] == 1)
               {
                 DP[i][j] = DP[i+1][j-1];
               }
            }
        }
      }
    }

    let max = 0;
    let range:[number,number];

    for(let i=0; i<n; i++)
    { 
      for(let j=i; j < n; j++)
      {
        if(DP[i][j] == 1)
        {
            let val = (j-i) + 1;

            if(val > max)
            {
                max = val;
                range = [i,j];
            }
        }
      }
    }

    return s.substring(range[0],range[1]+1);
};