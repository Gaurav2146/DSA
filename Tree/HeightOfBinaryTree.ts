class TreeNode {
    data: number;
    left: TreeNode;
    right: TreeNode;
    constructor(data: number) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class HeightOfBinaryTree {
    //Function to find the height of a binary tree.
    height(node: TreeNode): number {
        if (node == null) {
            return 0;
        }
        //your code here
        if (node.left == null && node.right == null) {
            return 1;
        }

        let left_height: number = this.height(node.left);

        let right_height: number = this.height(node.right);

        return 1 + Math.max(left_height, right_height);
    }
}