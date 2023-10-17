class CheckForBalancedTree {
    //Function to check whether a binary tree is balanced or not.
    isBalanced(root: TreeNode) {
        return this.solve(root)[0];
    }

    solve(root: TreeNode): [boolean, number] {
        //your code here
        if (root == null) {
            return [true, 0];
        }

        if (root.left == null && root.right == null) {
            return [true, 1];
        }

        let left_height: [boolean, number] = this.solve(root.left);

        let right_height: [boolean, number] = this.solve(root.right);

        if (left_height[0] != right_height[0] || (left_height[0] == false && right_height[0] == false)) {
            return [false, 1 + Math.max(left_height[1], right_height[1])]
        }
        else if (Math.abs(left_height[1] - right_height[1]) > 1) {
            return [false, 1 + Math.max(left_height[1], right_height[1])]
        }
        else {
            return [true, 1 + Math.max(left_height[1], right_height[1])]
        }
    }
}
