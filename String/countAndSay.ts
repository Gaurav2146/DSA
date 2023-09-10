
class CountAndSay{

    createSequence(input:string):string
    {
        let sequence:string = "";

        for(let i=0;i<input.length;i++)
        {

           let char = input[i];
           let j=i;
           let count = 0;

           while( j < input.length && input[j] == char)
           {
              count++;
              j++;
           }

           i = j - 1;

           sequence = sequence + count + char;
        }

        return sequence;

    }

    createSequenceForNIterations(n:number)
    {
        let input = "1";
        let output;
        let sequence = ["1"];
        for(let i=0; i<n; i++)
        {
           output =  this.createSequence(input);
           sequence.push(output);
           input = output;
        }
        return sequence;
    }
}

let countAndSay = new CountAndSay();
let sequence = countAndSay.createSequenceForNIterations(8);
console.log(sequence);

