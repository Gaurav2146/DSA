// Given a binary tree of size  N, a node, and a positive integer k., Your task is to complete the function kthAncestor(), the function should return the kth ancestor of the given node in the binary tree. If there does not exist any such ancestor then return -1.
// Note:
// 1. It is guaranteed that the node exists in the tree.
// 2. All the nodes of the tree have distinct values.

// Example 1:

// Input:
// K = 2 Node = 4
// Output: 1
// Explanation:
// Since, K is 2 and node is 4, so we
// first need to locate the node and
// look k times its ancestors.
// Here in this Case node 4 has 1 as his
// 2nd Ancestor aka the Root of the tree.
// Example 2:

// Input:
// k=1 
// node=3
//       1
//     /   \
//     2     3

// Output:
// 1
// Explanation:
// K=1 and node=3 ,Kth ancestor of node 3 is 1.
// Your Task:
// You are asked to complete the function kthAncestor() which accepts root of the tree, k and node as input parameters, and returns the kth ancestor of Node which contains node as its value.

// Expected Time Complexity: O(N)
// Expected Auxiliary Space: O(N)

// Constraints:
// 1<=N<=105
// 1<= K <= 100
// 1 <= Node.data <= N

class TreeNode{
    data:number;
    left:TreeNode|null;
    right:TreeNode|null;
    constructor(data:number){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

 /**
   * @param {Node} root
   * @param {number} k
   * @param {number} node
   * @return {number}
  */

 class KthAncestorInTree
 { 
   ansestor = -1;    
     
   kthAncestor(root:TreeNode|null,k:number,node:number){
      //code here
      
      this.solve(root,k,node);
      
      return this.ansestor;
   }  
   
   solve(root:TreeNode|null,k:number,node:number)
   {
       
       if(root == null)
       {
           return [false,0];
       }
       
       if(root.data == node)
       {
           return [true,0];
       }
       
       let left = this.solve(root.left,k,node);
       
       let right = this.solve(root.right,k,node);
       
       if(left[0] == false && right[0] == false)
       {
           return [false,0];
       }
       else if(left[0]==true)
       {
           if(left[1] + 1==k)
           {
               this.ansestor = root.data;
           }
           return [true,left[1]+1]
       }
       else 
       {
           if(right[1] + 1 ==k)
           {
               this.ansestor = root.data;
           }
           return [true,right[1]+1]
       }
   }
 }  