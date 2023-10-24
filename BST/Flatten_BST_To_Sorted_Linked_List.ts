     class BSTNode
     {
         
             data:number;
             left:BSTNode;
             right:BSTNode;

            constructor(data:number)
            {
                this.data = data;
                this.left = null;
                this.right = null;
            }
     };

     class Flatten_BST_To_Sorted_Linked_List
     {

         head:BSTNode = new BSTNode(-1);
         tail:BSTNode = new BSTNode(-1);

         flatten(root:BSTNode):BSTNode
         {
             this.preorder(root);
    
             return this.head.right;
         }
     
         preorder(root:BSTNode)
         {
     
             if(root==null)
             {
               return;
             }
     
             this.preorder(root.left );

             let right_node = root.right;
     
             if(this.head.data == -1)
             {
                 this.head.data = 1;
                 this.head.right = root;
                 this.tail = root;
             }
             else
             {
                root.left = null;
                root.right = null;
                this.tail.right = root;
                this.tail = root;
             }
     
             this.preorder(right_node);
         }
     }

     let tree = new BSTNode(10);
     tree.left = new BSTNode(6);
     tree.left.left = new BSTNode(2);
     tree.left.right = new BSTNode(8);
     tree.right = new BSTNode(12);
     tree.right.left = new BSTNode(11);
     tree.right.right = new BSTNode(15);

     let res = new Flatten_BST_To_Sorted_Linked_List().flatten(tree);

     while(res!=null)
     {
        console.info(res.data);
        res = res.right;
     }

