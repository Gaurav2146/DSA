
class BST_Node {
    data: number;
    left: BST_Node;
    right: BST_Node;
    constructor(data: number) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}


/**
  * @param {Node} root
  * @return {Node}
 */

class Normal_BST_to_Balanced_BST {
    buildBalancedTree(root: BST_Node) {
        //code here
        let inorder: number[] = [];
        this.inorder(root, inorder);

        let mid = Math.floor(inorder.length / 2);

        let node = new BST_Node(inorder[mid]);

        node.left = this.solve(0, mid - 1, inorder);
        node.right = this.solve(mid + 1, inorder.length - 1, inorder);

        return node;
    }

    solve(low: number, high: number, inorder: number[]): BST_Node {

        if (low > high) {
            return null;
        }

        if (low == high) {
            return new BST_Node(inorder[low]);
        }

        let mid = Math.floor((low + high) / 2);

        let node = new BST_Node(inorder[mid]);

        node.left = this.solve(low, mid - 1, inorder);
        node.right = this.solve(mid + 1, high, inorder);

        return node;

    }

    inorder(root: BST_Node, inorder: number[]): void {
        if (root == null) {
            return null;
        }

        this.inorder(root.left, inorder);
        inorder.push(root.data);
        this.inorder(root.right, inorder);
    }

} 