class Trie_Node
{
    value:string;
    children:Trie_Node[];
    isEnd:boolean;

    constructor()
    {
       this.children = new Array(26).fill(null);
       this.isEnd = false; 
    }
}

class WordDictionary {

    trie:Trie_Node;

    constructor() {
      this.trie = new Trie_Node();
    }

    addWord(word: string): void {
      this.insert( this.trie ,word,0);
    }

    insert(root:Trie_Node,  word: string, index:number)
    {
     if(root == null || word.length < index)
     {
         return;
     }   
     if(word.length == index)
     {
        root.isEnd = true;
        return;
     }

     let element_to_insert = word[index];
     let index_to_insert = element_to_insert.charCodeAt(0) - "a".charCodeAt(0);

     if(root.children[index_to_insert] == null)
     {
         let node = new Trie_Node();
         node.value = element_to_insert;
         root.children[index_to_insert] = node;
         this.insert(root.children[index_to_insert],word,index+1);
     }
     else
     {
         this.insert(root.children[index_to_insert],word,index+1);
     }
    }

    search(word: string): boolean {
       return this.searchInTrie(this.trie,word,0);
    }

    searchInTrie(root:Trie_Node, word:string, index:number):boolean
    {
       if(word.length < index)
       {
         return false;
       } 

       if(word.length == index)
       {
           if(root.isEnd == true)
           {
               return true;
           }
           else
           {
               return false;
           }
       }

       let element_to_insert = word[index];

       if(element_to_insert != '.')
       {
          let index_to_search = element_to_insert.charCodeAt(0) - "a".charCodeAt(0);
       
          if(root.children[index_to_search] == null)
          {
             return false;
          }
          else
          {
             return this.searchInTrie(root.children[index_to_search], word, index+1);
          }
       }
       else
       {
           let res = false;

           for(let i=0; i < root.children.length; i++)
           {
             if(root.children[i] != null)
             {
                res =  this.searchInTrie(root.children[i], word, index+1);

                if(res == true)
                {
                  return true;
                }
             }
           }

           return false;
       }
    }
}

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */