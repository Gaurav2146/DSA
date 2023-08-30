export class TreeNode {
    data: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(data: number) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class ConstructTree {
    buildTree(array: number[], index: number) {
        if (array.length > index) {
            let node = new TreeNode(array[index]);
            node.left = this.buildTree(array, index * 2 + 1);
            node.right = this.buildTree(array, index * 2 + 2);
            return node;
        }
        return null;
    }
}

// let node = new ConstructTree().buildTree([1, 3, 5, 7, 11, 17], 0);
// console.log("==================================================");
// console.log(node);
// console.log("==================================================");