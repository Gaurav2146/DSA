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
         flatten(root:BSTNode):BSTNode
         {
             // Write your code here
             let head = null;
             let tail = null;
     
             this.preorder(root,head,tail);
    
             return head;
         }
     
         preorder(root:BSTNode,head:BSTNode,tail:BSTNode)
         {
     
             if(root==null)
             {
               return;
             }
     
             this.preorder(root.left ,head,tail);
     
             let rightNode = root.right;
     
             if(head == null)
             {
                 head = root;
                 tail = root;
             }
             else
             {
                root.left = null;
                root.right = null; 
                tail.right = root;
                tail = root;
             }
     
             this.preorder(rightNode ,head,tail);
     
         }
     }

     let tree = new BSTNode(10);
     tree.left = new BSTNode(6);
     tree.left.left = new BSTNode(2);
     tree.left.right = new BSTNode(8);
     tree.right = new BSTNode(12);
     tree.right.left = new BSTNode(11);
     tree.right.right = new BSTNode(15);

     console.log(new Flatten_BST_To_Sorted_Linked_List().flatten(tree))