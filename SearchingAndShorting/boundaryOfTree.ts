class boundaryOfTree {
    boundary(root: TreeNode) {
        //your goes code here

        let left_boundary: number[] = [];
        let leaf_boundary: number[] = [];
        let right_boundary: number[] = [];

        this.printLeft(root.left, left_boundary);

        this.printLeaf(root, leaf_boundary);

        this.printRight(root.right, right_boundary);

        if (root.left == null && root.right == null) {
            return [root.data];
        }
        else {
            return [root.data, ...left_boundary, ...leaf_boundary, ...(right_boundary.reverse())];
        }

    }

    printLeft(root: TreeNode, array: number[]) {

        if (root == null) {
            return;
        }

        if (root.left == null && root.right == null) {
            return;
        }

        array.push(root.data);

        if (root.left) {
            this.printLeft(root.left, array);
        }
        else {
            this.printLeft(root.right, array);
        }

    }

    printLeaf(root: TreeNode, array: number[]) {

        if (root == null) {
            return;
        }

        if (root.left == null && root.right == null) {
            array.push(root.data);
        }

        this.printLeaf(root.left, array);

        this.printLeaf(root.right, array);
    }

    printRight(root: TreeNode, array: number[]) {

        if (root == null) {
            return;
        }

        if (root.left == null && root.right == null) {
            return;
        }

        array.push(root.data);

        if (root.right) {
            this.printRight(root.right, array);
        }
        else {
            this.printRight(root.left, array);
        }

    }

}