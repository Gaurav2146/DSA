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

class TrieOperations
{

 insert(root:Trie,index:number,input:string)
 {
    
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

        this.insert(root.children[index_to_insert],index + 1,input);
     }
     else
     {
        this.insert(root.children[index_to_insert],index + 1,input);
     }
 }


 printTrie(root:Trie,res:string,allResults:string[])
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
        this.printTrie(root.children[i],res+root.children[i].value,allResults);
    }
   }

 }

 
}

let trieOperation = new TrieOperations();

let trie = new Trie();

trieOperation.insert(trie,0,"11011");
trieOperation.insert(trie,0,"11001");
trieOperation.insert(trie,0,"01011");
trieOperation.insert(trie,0,"00011");
trieOperation.insert(trie,0,"01001");
trieOperation.insert(trie,0,"00100");
trieOperation.insert(trie,0,"11111");


let allResults:string[] = [];

trieOperation.printTrie(trie,"",allResults);

console.log(allResults , "allResults");