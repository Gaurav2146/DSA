class K_Sum_Path
{ 

  count = 0;
  sumK(root:TreeNode,K:number){
     //code here
     let path:number[] = [];
     this.solve(root,K,path);
     return this.count;
  }
  
  solve(root:TreeNode,k:number,path:number[])
  {
     
     if(root == null)
     {
         return;
     }
     path.push(root.data);
     
     this.solve(root.left,k,path);
     this.solve(root.right,k,path);
     
      let j = path.length - 1;
      let sum = 0;
         
      while(j >= 0)
      {
        sum = sum + path[j];
        j--;
        
        if(sum == k)
        {
          this.count++;
        }
      }
      
      path.pop();
  }
} 