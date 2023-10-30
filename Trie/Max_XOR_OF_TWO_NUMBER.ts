class Trie{

    value:string;
    children:Trie[];
    wordEnd:number=0;
   
     constructor()
     {
         this.children = new Array(2).fill(null);
     }
   }
   
   
   function findMaximumXOR(nums: number[]): number {
   
   let result =  findMaxValueAndMaxSizeOfBits(nums);
   
   let length_of_bits = result.length;
   
   let nusBitsRepresentation = new Array(nums.length).fill("0");
   
   for(let i=0; i <nums.length; i++)
   {
      let res =  findBitRepresentation(nums[i]);
   
      let len = res.length;
   
      for(let j=0; j < length_of_bits - len; j++)
      {
        res = "0" + res;
      }
   
      nusBitsRepresentation[i] = res;
   }
   
   console.log(nusBitsRepresentation , "nusBitsRepresentation");
   
   let trieRoot = new Trie();
   
   for(let i=0; i <nusBitsRepresentation.length; i++)
   {
    insertIntoTrie(trieRoot,nusBitsRepresentation[i],0);
   }
   
   let first_number;
   let max = {max:Number.MIN_SAFE_INTEGER};
   
   for(let i=1; i <nusBitsRepresentation.length; i++)
   {
     first_number = nums[i-1];  
     let not_value = findNegation(nusBitsRepresentation[i]);
     let found_Index = -1;
     let any_children = -1;
   
     for(let j=0; j < trieRoot.children.length;j++)
     {
         if(trieRoot.children[j])
         {
            any_children = j;
         }
   
         if(trieRoot.children[j] && trieRoot.children[j].value == not_value[0])
         {
            found_Index = j;
         }
     }
   
     if(found_Index != -1)
     {
       searchTrie(trieRoot.children[found_Index],not_value,1,first_number,trieRoot.children[found_Index].value,max);
     }
     else if(any_children != -1)
     {
      searchTrie(trieRoot.children[any_children],not_value,1,first_number,trieRoot.children[any_children].value,max);
     }
   }
   
   return max.max;
   };
   
   function searchTrie(root:Trie,input:string,index:number,first_number:number,output:string,max:{max:number})
   {
   
       if(root == null)
       {
           return;
       }
   
       if(index > input.length)
       {
           return;
       }
   
       if(index == input.length)
       {
          
           let data = convertBitToNumber(output);
           let xor = data ^ first_number;
           if(xor > max.max)
           {
             max.max = xor;
           }
            return;
       }
   
       let found = -1;
       let lastFound = -1;
      
       for(let i=0; i < root.children.length; i++)
       {
          if(root.children[i])
          {
            lastFound = i;
          }
   
          if(root.children[i] && root.children[i].value == input[index])
          {
              found = i;
              break;
          }
       }
   
       if(found == -1)
       {
           if(lastFound == -1)
           {
                let data = convertBitToNumber(output);
                let xor = data ^ first_number;
                if(xor > max.max)
                {
                  max.max = xor;
                }
                return;
           }
           else
           {
             searchTrie(root.children[lastFound],input,index+1,first_number,output+input[lastFound],max);
           }
       }
       else
       {  
           searchTrie(root.children[found],input,index+1,first_number,output+input[index],max);
       }
   }
   
   function convertBitToNumber(input:string)
   {
       let len = input.length-1;
       let res = 0;
       let reference = 1;
   
       while(len >= 0)
       {
          res = res + reference * Number(input[len]);
          reference = reference*2;
          len--;
       }
   
       console.log(input , "input");
       console.log(res , "res");
   
       return res;
   }
   
   function insertIntoTrie(root:Trie ,input:string,index:number)
   {
   
   if(input.length == index && root.value != undefined)
   {
       root.wordEnd = root.wordEnd + 1;
       return;
   }
   else if(input.length == index && root.value == undefined)
   {
       let node = new Trie();
       node.value = input[index];
       root.children[Number(input[index])] = node;
       return;
   }
   
   let foundIndex = -1;
   
   for(let i=0; i <root.children.length; i++ )
   {
       if(root.children[i] && root.children[i].value == input[index])
       {
           foundIndex = i;
           break;
       }
   }
   
   if(foundIndex >= 0 && input.length - 2 == index)
   {
     root.children[foundIndex].wordEnd = root.children[foundIndex].wordEnd + 1;
   }
   else
   {
       let node = new Trie();
       node.value = input[index];
       root.children[Number(input[index])] = node;
   
       insertIntoTrie(node,input,index+1);
   }
   
   }
   
   function findNegation(input:string)
   {
       let res = "";
   
       for(let i=0; i < input.length; i++)
       {
           if(input[i] == "1")
           {
               res = res + "0";
           }
           else
           {
               res = res + "1";
           }
       }
       return res;
   }
   
   
   function findMaxValueAndMaxSizeOfBits(nums: number[]):string
   {
    
    let max = Number.MIN_SAFE_INTEGER;
     for(let i=0; i < nums.length;i++)
     {
         if(nums[i] > max)
         {
             max = nums[i];
         }
     }
   
     return findBitRepresentation(max);
   }
   
   function findBitRepresentation(num:number):string
   {
   let res = "";
   while(num!=0)
   {
       res = num % 2 + res;
   
       num = Math.floor(num/2);
   }
   return res;
   }