
class Trie{

    value:string;
    children:Trie[];
    isEndOfString:boolean;
   
    constructor()
    {
       this.children = new Array(2).fill(null);
       this.isEndOfString=false;
    }
   }

function findMaximumXOR(nums: number[],trieRoot:Trie): number {

    let result = findMaxValueAndMaxSizeOfBits(nums);
    let length_of_bits = result.length;
    let nusBitsRepresentation = new Array(nums.length).fill("0");

    for (let i = 0; i < nums.length; i++) {
        let res = findBitRepresentation(nums[i]);

        let len = res.length;

        for (let j = 0; j < length_of_bits - len; j++) {
            res = "0" + res;
        }

        nusBitsRepresentation[i] = res;
    }

    for (let i = 0; i < nusBitsRepresentation.length; i++) {
        insertIntoTrie(trieRoot,0, nusBitsRepresentation[i]);
    }

    let first_number;
    let max = { max: Number.MIN_SAFE_INTEGER };

    for (let i = 0; i < nusBitsRepresentation.length - 1; i++) {
        
        first_number = nums[i];
        
        let not_value = findNegation(nusBitsRepresentation[i]);
       
        searchTrie(trieRoot, not_value, 1, first_number, "", max);
    }

    return max.max;
};

function searchTrie(root: Trie, input: string, index: number, first_number: number, output: string, max: { max: number }) {

    

}

function convertBitToNumber(input: string) {
    let len = input.length - 1;
    let res = 0;
    let reference = 1;

    while (len >= 0) {
        res = res + reference * Number(input[len]);
        reference = reference * 2;
        len--;
    }

    return res;
}

function insertIntoTrie(root:Trie,index:number,input:string) {

    if(index == input.length)
    {
       root.isEndOfString = true;
       return;
    }

    let element_to_insert = input[index];

    let index_to_insert = Number(element_to_insert);

    if(root.children[index_to_insert] == null)
    {
       let node = new Trie();
       node.value = element_to_insert;
       root.children[index_to_insert] = node;

       insertIntoTrie(root.children[index_to_insert],index + 1,input);
    }
    else
    {
      insertIntoTrie(root.children[index_to_insert],index + 1,input);
    }

}

function findNegation(input: string) {
    let res = "";

    for (let i = 0; i < input.length; i++) {
        if (input[i] == "1") {
            res = res + "0";
        }
        else {
            res = res + "1";
        }
    }
    return res;
}


function findMaxValueAndMaxSizeOfBits(nums: number[]): string {

    let max = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > max) {
            max = nums[i];
        }
    }

    return findBitRepresentation(max);
}

function findBitRepresentation(num: number): string {
    let res = "";
    while (num != 0) {
        res = num % 2 + res;

        num = Math.floor(num / 2);
    }
    return res;
}

function printTrie(root:Trie,res:string,allResults:string[])
{
    if(root == null)
    {
      return;
    }

   if(root.isEndOfString == true)
   {
    allResults.push(res);
    return;
   }

   for(let i=0; i < root.children.length; i++)
   {

    if(root.children[i] && root.children[i].value)
    {
        printTrie(root.children[i],res+root.children[i].value,allResults);
    }
   }
}

let trieRoot = new Trie();

console.log( findMaximumXOR([14,70,53,83,49,91,36,80,92,51,66,70],trieRoot) );

// let Results:string[] = [];

// printTrie(trieRoot,"",Results);

// console.log(Results , "Results");



