class diameterOfBinaryTree {
    
    max=0;
    // Function to return the diameter of a Binary Tree.
    diameter(root:TreeNode) {
       this.solve(root);
       return this.max;
    }
    
    solve(root:TreeNode) {
        // your code here
        
        if(root==null)
        {
            return 0;
        }
        
        if(root.left==null && root.right==null)
        {
            this.max = Math.max(this.max,1);
            return 1;
        }
        
        let left_height:number = this.solve(root.left);
        let right_height:number = this.solve(root.right);
        
        this.max = Math.max(this.max,left_height+right_height+1);
        
        return Math.max(left_height,right_height) + 1; 
    }
}
