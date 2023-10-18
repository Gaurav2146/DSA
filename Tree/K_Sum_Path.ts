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
     
    
    if(k > 0)
    {
      let j = path.length - 1;
      let num = k - root.data;
         
      while(j>=0 && num > 0 )
      {
        let path_value = path[j];
        num = num - path_value;
        j--;
      }
         
       if(num == 0)
       {
         this.count++;
       }
    }
    else
    {
        let j = path.length - 1;
        let num = k - root.data;
         
        while(j>=0 && num < 0 )
        {
         let path_value = path[j];
         num = num - path_value;
         j--;
        }
         
        if(num == 0)
        {
         this.count++;
        }
    }
     
     this.solve(root.left,k,[...path,root.data]);
     
     this.solve(root.right,k,[...path,root.data]);
     
  }
} 