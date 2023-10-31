class recursiveTrieNode
{
    value:number;
    children:recursiveTrieNode[];
    isEnd:boolean;

    constructor() {
        this.children = new Array(2).fill(null);
        this.isEnd = false;
    }
}

class Recursive_Implementation
{
   insert(root:recursiveTrieNode,num:number)
   {
    for(let i=31; i >=0; i--)
    {
        //Checking if ith bit is 0 or 1.
        let bit:number = (num >> i) & 1;

        let node = new recursiveTrieNode();
        node.value = bit;
        root.children[bit] = node;
        root = root.children[bit];
    }
       
     root.isEnd = true; 
   }

   insertArray(nums:number[])
   {
    let trieNodeRecursive = new recursiveTrieNode();

    for(let num of nums)
    {
       this.insert(trieNodeRecursive,num);
    }
   }
}





