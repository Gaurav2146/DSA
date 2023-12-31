// Given a boolean expression S of length N with following symbols.
// Symbols
//     'T' ---> true
//     'F' ---> false
// and following operators filled between symbols
// Operators
//     &   ---> boolean AND
//     |   ---> boolean OR
//     ^   ---> boolean XOR
// Count the number of ways we can parenthesize the expression so that the value of expression evaluates to true.

// Note: The answer can be large, so return it with modulo 1003

 

// Example 1:

// Input: N = 7
// S = T|T&F^T
// Output: 4
// Explaination: The expression evaluates 
// to true in 4 ways ((T|T)&(F^T)), 
// (T|(T&(F^T))), (((T|T)&F)^T) and (T|((T&F)^T)).
// Example 2:

// Input: N = 5
// S = T^F|F
// Output: 2
// Explaination: ((T^F)|F) and (T^(F|F)) are the 
// only ways.
 

// Your Task:
// You do not need to read input or print anything. Your task is to complete the function countWays() which takes N and S as input parameters and returns number of possible ways modulo 1003.

 

// Expected Time Complexity: O(N3)
// Expected Auxiliary Space: O(N2)

class Boolean_Parenthesization {
    
    countWays(S:string, n:number)
    {
        //your code here
        let DP:[number,number][][] = new Array(n+1);
        
        for(let i=0;i<n+1;i++)
        {
            DP[i] = new Array(n+1).fill([-1,-1]);
        }
        
        return this.solve(S,n,0,n-1,DP)[0];
    }
    
    solve(S:string, n:number, start:number, end:number,DP:[number,number][][]):[number,number]
    {
    
      if(start > end)
      {
          return [0,0];
      }
      
      
      if(start == end)
      {
          if(S[start] == "T")
          {
              return [1,0];
          }
          else
          {
              return [0,1];
          }
      }
      
      if(DP[start][end][0]!=-1 && DP[start][end][1]!=-1)
      {
          return DP[start][end];
      }
      
      let number_of_ways_to_be_true = 0;
      let number_of_ways_to_be_false = 0;
      
      for(let k=start; k < end-1; k = k+2)
      {
          
          let res1 = this.solve(S, n, start, k,DP);
          
          let res2 = this.solve(S, n, k+2,end,DP);
          
          
          if(S[k+1] == "^")
          {
              number_of_ways_to_be_true += res1[0]*res2[1] + res1[1]*res2[0]; 
              
              number_of_ways_to_be_false += res1[0]*res2[0] + res1[1]*res2[1];
              
          }
          else if(S[k+1] == "|")
          {
              number_of_ways_to_be_true += res1[0]*res2[1] + res1[0]*res2[0] + res2[0]*res1[1];
              
              number_of_ways_to_be_false += res1[1]*res2[1];
          }
          else if(S[k+1] == "&")
          {
              
              number_of_ways_to_be_true += res1[0]*res2[0];
              
              number_of_ways_to_be_false += res1[0]*res2[1] + res1[1]*res2[1] + res1[1]*res2[0];
              
          }
      }
      
      DP[start][end] = [ number_of_ways_to_be_true%1003, number_of_ways_to_be_false%1003 ];
      
      return [ number_of_ways_to_be_true%1003, number_of_ways_to_be_false%1003 ];
        
    }
}

let bool_obj = new Boolean_Parenthesization();

console.log( bool_obj.countWays("T|T&F^T",7));