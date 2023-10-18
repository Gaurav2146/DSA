/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
   function pathSum(root: TreeNode | null, targetSum: number): number {
    let count = {count:0};
    solve(root,targetSum,[],count);
    return count.count;
   };
  
    function solve(root : TreeNode | null,k:number,path:number[],count:{count:number})
    {
       if(root == null)
       {
           return;
       }
       path.push(root.data);
       
       solve(root.left,k,path,count);
       solve(root.right,k,path,count);
       
        let j = path.length - 1;
        let sum = 0;
           
        while(j >= 0)
        {
          sum = sum + path[j];
          j--;
          
          if(sum == k)
          {
            count.count++;
          }
        }
        
        path.pop();
    }
  