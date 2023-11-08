//YOU WILL BE GIVEN EDGES FOR DIRECTED GRAPH IN THE INPUT.
//YOU HAVE TO FIND THAT IF THE GRAPH FORMED IS BIPARTIDE OR NOT.

//THE QUESTION CAN ALSO BE IN THE THE FORM THAT IS IT POSSIBLR TO DIVIDE THESE PEOPLE IN DIFFERENT GROUP.
//EACH INPUT WILL BE AN ARRAY OF SIZE 2 IN WHICH FIRST INDEX VALUE WILL BE FIRST PERSON AND SECOND INDEX VALUE
//WILL BE SECOND PERSON.

enum Colour{
    RED,
    GREEN
}

class GraphNode
{
    value:number;
    colour:Colour;

    constructor(value:number , colour:Colour)
    {
        this.value = value;
        this.colour = colour;
    }
}

class check_If_Graph_Is_Bipartile
{
    adjecencyList:Map<GraphNode,GraphNode[]>;
    graphNodeToValueMap:Map<number,GraphNode>;

    constructor()
    {
        this.adjecencyList = new Map<GraphNode,GraphNode[]>();
        this.graphNodeToValueMap = new Map<number,GraphNode>();
    }

    create(u:number,v:number)
    {
        let node_u:GraphNode;
        let node_v:GraphNode;

        if(this.graphNodeToValueMap.has(u))
        {
            node_u = this.graphNodeToValueMap.get(u)
        }
        else
        {
            node_u = new GraphNode(u,Colour.GREEN);
            this.graphNodeToValueMap.set(u,node_u);
        }

        if(this.graphNodeToValueMap.has(v))
        {
            node_v = this.graphNodeToValueMap.get(v)
        }
        else
        {
            node_v = new GraphNode(v,Colour.RED); 
            this.graphNodeToValueMap.set(v,node_v);
        }

        //create Edge from u to v
        if(this.adjecencyList.has(node_u))
        {
            let list = this.adjecencyList.get(node_u);
            list.push(node_v);
        }
        else
        {
            this.adjecencyList.set(node_u,[node_v]);
        }

        //create Edge from v to u
        if(this.adjecencyList.has(node_v))
        {
            let list = this.adjecencyList.get(node_v);
            list.push(node_u);
        }
        else
        {
            this.adjecencyList.set(node_v,[node_u]);
        }

    }

    isBipartite():boolean
    {
        for(let [key,value] of this.adjecencyList)
        {
               let res = this.dfs(key);

               if(res == false)
               {
                 return false;
               }
        }

        return true;
    }

    dfs(node:GraphNode):boolean
    {
      let adjecent_nodes = this.adjecencyList.get(node);

      if(adjecent_nodes && adjecent_nodes.length > 0)
      {
         for(let i=0; i < adjecent_nodes.length; i++)
         {
            if(adjecent_nodes[i].colour == node.colour)
            {
                return false;
            }
         }
      }

      return true;
    }
}

let checkIfGraphIsBipartile = new check_If_Graph_Is_Bipartile();

checkIfGraphIsBipartile.create(1,2);
checkIfGraphIsBipartile.create(1,7);
checkIfGraphIsBipartile.create(3,6);
checkIfGraphIsBipartile.create(4,8);
checkIfGraphIsBipartile.create(9,10);

console.log(  checkIfGraphIsBipartile.isBipartite() , "isBipartite" )