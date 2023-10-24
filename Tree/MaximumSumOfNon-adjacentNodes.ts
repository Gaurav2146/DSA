class MaximumSumOfNonAdjacentNodes 
{
    //Function to return the maximum sum of non-adjacent nodes.
    getMaxSum(root:TreeNode)
    {
        //your code here
        return Math.max( this.solve(root,true) , this.solve(root,false));
    }
    
    solve(root:TreeNode,canTake:boolean):number
    {
        
        if(root==null)
        {
            return 0;
        }
        
        if(root.left==null && root.right==null)
        {
            
            if(canTake)
            {
                return root.data;
            }
            else
            {
                return 0;
            }
        }
        
        if(canTake)
        {
            return Math.max( (root.data + this.solve(root.left,!canTake) + this.solve(root.right,!canTake)) ,
            
            Math.max(
                      (  this.solve(root.left,canTake) + this.solve(root.right,!canTake) ),
       
                      ( this.solve(root.left,!canTake) + this.solve(root.right,canTake) ),
           
                      ( this.solve(root.left,canTake) + this.solve(root.right,canTake) ))
           );
              
        }
        else
        {
           return Math.max(
           (  this.solve(root.left,canTake) + this.solve(root.right,!canTake) ),
       
           ( this.solve(root.left,!canTake) + this.solve(root.right,canTake) ),
           
           ( this.solve(root.left,!canTake) + this.solve(root.right,!canTake) ),
           
           ( this.solve(root.left,canTake) + this.solve(root.right,canTake) ) )
        }
        
    }
}
