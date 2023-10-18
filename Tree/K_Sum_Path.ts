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
  