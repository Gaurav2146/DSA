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

        if(root.children[bit] != null)
        {
            root = root.children[bit];
        }
        else
        {
            let node = new recursiveTrieNode();
            node.value = bit;
            root.children[bit] = node;
            root = root.children[bit];
        }
    }  

     root.isEnd = true; 
   }

   findMaxXor(root:recursiveTrieNode , num:number):number
   {

    let xor = 0;

    for(let i=31; i >=0; i--)
    {
        //Checking if ith bit is 0 or 1.
        let bit:number = (num >> i) & 1;

        if(bit == 0)
        {
          if(root.children[1] != null)
          {
            xor = xor + (1 << i);
            root = root.children[1];
          }
          else
          {
            root = root.children[0];
          }
        }
        else
        {
            if(root.children[0] != null)
            {
                xor = xor + (1 << i);
              root = root.children[0];
            }
            else
            {
              root = root.children[1];
            }
        }
    }

    return xor;
   }

   insertArray(nums:number[])
   {
    let trieNodeRecursive = new recursiveTrieNode();

    for(let num of nums)
    {
       this.insert(trieNodeRecursive,num);
    }

    let max_xor = Number.MIN_SAFE_INTEGER;

    for(let num of nums)
    {
        max_xor = Math.max(max_xor , this.findMaxXor(trieNodeRecursive,num));
    }

    return max_xor;
   }
}

console.log( "Recursive_Implementation", new Recursive_Implementation().insertArray([14, 70, 53, 83, 49, 91, 36, 80, 92, 51, 66, 70]));





