class DetermineIfTwoTreesAreIdentical {
    //Function to check if two trees are identical.
    isIdentical(root1:TreeNode, root2:TreeNode):boolean
    {
        if(root1==null && root2==null)
        {
            return true;
        }
        else if(root1==null)
        {
            return false;
        }
        else if(root2==null)
        {
            return false;
        }
        
        //your code here
        if(root1.data!==root2.data)
        {
            return false;
        }
        
        return this.isIdentical(root1.left,root2.left) && 
               this.isIdentical(root1.right,root2.right) &&
               (root1.data==root2.data)
        
    }
}
