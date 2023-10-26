
class LargestBSTNode {
    key: number;
    left: LargestBSTNode;
    right: LargestBSTNode;
    constructor(x: number) {
        this.key = x;
        this.left = null;
        this.right = null;
    }
}


/**
 * @param {Node} root
 * @return {number}
*/
class LargestBST {

    answer = 0;

    largestBst(root: LargestBSTNode) {
        //code here
        this.answer = 0;
        this.solve(root);
        return this.answer;
    }

    solve(root: LargestBSTNode): { min: number, isBST: Boolean, size: number, max: number } {
        if (root == null) {
            return { min: Number.MAX_SAFE_INTEGER, isBST: true, size: 0, max: Number.MIN_SAFE_INTEGER }
        }

        let left = this.solve(root.left);
        let right = this.solve(root.right);

        let size = left.size + right.size + 1;
        let min = Math.min(left.min, root.key);
        let max = Math.max(right.max, root.key);

        let isBST = false;

        if (left.isBST && right.isBST && (root.key > left.max && root.key < right.min)) {
            this.answer = Math.max(this.answer, size);
            isBST = true;
        }

        return { min: min, isBST: isBST, size: size, max: max }
    }
}
