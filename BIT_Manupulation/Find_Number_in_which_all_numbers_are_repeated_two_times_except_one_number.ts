//You have to Find a Number from an array in which all numbers are repeated three times except one number.

class numberRepeatedTwoTimes {
    findNumber(input:number[])
    {
        let result = 0;
        for(let i=0; i < input.length; i++)
        {
            result = result ^ input[i];
        }
        return result;
    }
}
 console.log( new numberRepeatedTwoTimes().findNumber([1,1,2,3,4,3,4]) );