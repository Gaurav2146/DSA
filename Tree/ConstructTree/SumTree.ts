
class Tree_Node
{
    key:number;
    left:Tree_Node;
    right:Tree_Node;
    constructor(x:number){
        this.key=x;
        this.left=null;
        this.right=null;
    }
}


class SumTree {
    // Should return true if tree is Sum Tree, else false
    isSumTree(root:Tree_Node) {
        return this.solve(root)[0];
    }

    solve(root:Tree_Node):[boolean,number] {
        //code here

        if (root == null) {
            return [true, 0];
        }

        if (root.left == null && root.right == null) {
            return [true, root.key];
        }

        let left_tree = this.solve(root.left);

        let right_tree = this.solve(root.right);

        if (left_tree[0] == true && right_tree[0] == true && left_tree[1] + right_tree[1] == root.key) {
            return [true, 2 * root.key]
        }
        else {
            return [false, left_tree[1] + right_tree[1] + root.key]
        }
    }
}