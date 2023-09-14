
function cnttrue(A: string) {

    return calculate(A, 0, A.length - 1)[0];

}

function calculate(str: string, i: number, j: number) {
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


        let temp1 = calculate(str, i, k);
        let temp2 = calculate(str, k + 2, j);

        // console.log(temp1, "temp1");
        // console.log(temp2, "temp2");

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

    return number_of_ways;
}


// console.log(cnttrue("F|T^T&F"));

//1
console.log(cnttrue("T|F"));

//0
console.log(cnttrue("T^T^F"));

//2
console.log(cnttrue("F|T^T&F")); 


// function calculate(str,i,j,DP,isTrue)
// {
//     if(i>j)
//     {
//         return 0;
//     }
    
//     if(i==j)
//     {
//         if(str[i]=="T" && isTrue==true)
//         {
//             return 1;
//         }
//         else if(str[i]=="T" && isTrue==false)
//         {
//             return 0;
//         }
//          else if(str[i]=="F" && isTrue==true)
//         {
//             return 0;
//         }
//          else if(str[i]=="F" && isTrue==false)
//         {
//             return 1;
//         }
//     }
    
//     if(DP[i][j][0] != -1 && isTrue==true)
//     {
//         return DP[i][j][0];
//     }
    
//     if(DP[i][j][1] != -1 && isTrue==false)
//     {
//         return DP[i][j][1];
//     }
    
//     let tempAns = 0;
    
//     for (let k = i; k <= j - 2; k = k + 2) {

//     let left_true = this.calculate(str, i, k,DP,true);
//     let right_true = this.calculate(str, k + 2, j,DP,true);
    
//     let left_false = this.calculate(str, i, k,DP,false);
//     let right_false = this.calculate(str, k + 2, j,DP,false);

//     if (str[k + 1] == "|") {
//       if(isTrue==true)
//       {
//            tempAns = tempAns + left_true*right_true + left_false*right_true + left_true*right_false;
//       }
//       else
//       {
//            tempAns = tempAns + left_false*left_false;
//       }
              
//     }

//     if (str[k + 1] == "&") {
//        if(isTrue==true)
//        {
//             tempAns = tempAns + left_true * right_true;
//        }
//        else
//        {
//            tempAns = tempAns + left_false * right_false + left_true * right_false + left_false * right_true;
//        } 
//     }

//     if (str[k + 1] == "^") {
//         if(isTrue==true)
//         {
//             tempAns = tempAns + left_false * right_true +  left_true * right_false;
//         }
//         else
//         {
//              tempAns = tempAns + left_true * right_true +  left_false * right_false;
//         }
//     }

// }
//      if(isTrue==true)
//      {
//         DP[i][j][0] =  tempAns;
//      }
//      else
//      {
//          DP[i][j][1] =  tempAns;
//      }
//     return tempAns;
// }