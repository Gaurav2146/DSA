
    //param A : string
    //return an integer
    function cnttrue(A:string){
   
       let DP = [];
       
       for(let i=0; i < A.length; i++)
       {
            let arr = [];
            for(let j=0; j < A.length; j++)
            {
                arr.push([-1,-1])
            }
            DP.push(arr);
       }
   
       // return this.calculate(A,0,A.length-1,1,DP)
       return calculate(A,0,A.length-1,DP)[0]
   
       }
       
    function calculate(str:string, i:number, j:number,DP:number[][][]) {
       if (i > j) {
           return [0, 0];
       }
   
       if (i == j) {
           if (str[i] == "T") {
               return [1, 0];
           }
   
           if (str[i] == "F") {
               return [0, 1];
           }
       }
   
       let number_of_ways = [0, 0];
   
       for (let k = i; k <= j - 2; k = k + 2) {
   
           let temp1 = calculate(str, i, k,DP);
           let temp2 = calculate(str, k + 2, j,DP);
   
           if (str[k + 1] == "|") {
             
                   number_of_ways[0] = number_of_ways[0] + temp1[0]*temp2[0] + temp1[1]*temp2[0] + temp1[0]*temp2[1];
                   number_of_ways[1] = number_of_ways[1] + temp1[1]*temp2[1];
               
           }
   
           if (str[k + 1] == "&") {
              
                   number_of_ways[0] = number_of_ways[0] + temp1[0]*temp2[0];
                   number_of_ways[1] = number_of_ways[1] + temp1[1]*temp2[1] + temp1[0]*temp2[1] + temp1[1]*temp2[0];
               
           }
   
           if (str[k + 1] == "^") {
   
               number_of_ways[0] = number_of_ways[0] + temp1[1] * temp2[0] + temp1[0] * temp2[1];
               number_of_ways[1] = number_of_ways[1] + temp1[0]*temp2[0] +  temp1[1]* temp2[1];
           }
   
       }
   
       number_of_ways[0] = number_of_ways[0]%1003;
       number_of_ways[1] = number_of_ways[1]%1003;

       return number_of_ways;
   }
      
   
   console.log(cnttrue("F|T^T&F|T^T^T^F|F&F^F|T^F^T&T^F|F^T&F&F|T|T^T^F^F^F&F^T^F&T|T^T^T&T&T|T|T^T^F|F&F|F^F|T"));
   