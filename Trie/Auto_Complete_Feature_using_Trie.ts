class Trie_For_AutoComplete
{
    value:string;
    children:Trie_For_AutoComplete[];
    isEnd:boolean;

    constructor()
    {
        this.children = new Array(26).fill(null);
        this.isEnd = false;
    }
}


class Auto_Complete_Feature_using_Trie
{

    insert(root:Trie_For_AutoComplete,input:string,index:number)
    {
         if(input.length > index)
         {
            return;
         }

         if(input.length == index)
         {
            root.isEnd = true;
            return;
         }

        let element =  input[index];

        let index_to_insert = input[index].charCodeAt(0) - "a".charCodeAt(0);

        if(root.children[index_to_insert] == null)
        {
            let node = new Trie_For_AutoComplete();
            node.value = element;
            root.children[index_to_insert] = node;
            this.insert(root.children[index_to_insert], input, index+1);
        }
        else
        {
            this.insert(root.children[index_to_insert], input, index+1);
        }
    }

    search(root:Trie_For_AutoComplete,input:string,index:number,output:string,allResults:string[])
    {
        if(root == null)
        {
            return;
        }

        if(root.isEnd == true)
        {
            if(allResults.length < 3)
            {
                allResults.push(output);
            }
            return;
        }

        if(input.length < index)
        {
            let index_to_insert = input[index].charCodeAt(0) - "a".charCodeAt(0);

            if(root.children[index_to_insert])
            {
                this.search(root.children[index_to_insert],input,index+1,output + root.children[index_to_insert].value,allResults)
            }
        }
        else
        {

            for(let i=0; i < root.children.length; i++)
            {
                this.search(root.children[i],input,index+1,output + root.children[i].value,allResults)
            }

        }
    }
}


let auto_Complete_Feature_using_Trie = new Auto_Complete_Feature_using_Trie();

let trie_node = new Trie_For_AutoComplete();

auto_Complete_Feature_using_Trie.insert(trie_node,"abcd",0);
auto_Complete_Feature_using_Trie.insert(trie_node,"abc",0);
auto_Complete_Feature_using_Trie.insert(trie_node,"abct",0);

let Results:string[] = [];

auto_Complete_Feature_using_Trie.search(trie_node,"ab",0,"",Results);

console.log(Results , "Results");