class MergeTwoBST {
    //Function to return a list of integers denoting the node 
    //values of both the BST in a sorted order.
    merge(root1: BSTNode, root2: BSTNode) {
        //your code here

        let inorder_for_BST1: number[] = [];
        let inorder_for_BST2: number[] = [];

        this.inorder(root1, inorder_for_BST1);
        this.inorder(root2, inorder_for_BST2);

        let res = this.mergeBST(inorder_for_BST1, inorder_for_BST2);

        return res;
    }


    mergeBST(arr1: number[], arr2: number[]) {
        let len1 = arr1.length;
        let len2 = arr2.length;
        let arr = [];
        let i = 0;
        let j = 0;

        while (i < len1 && j < len2) {

            if (arr1[i] < arr2[j]) {
                arr.push(arr1[i]);
                i++;
            }
            else {
                arr.push(arr2[j]);
                j++;
            }

        }

        while (i < len1) {
            arr.push(arr1[i]);
            i++;
        }

        while (j < len2) {
            arr.push(arr2[j]);
            j++;
        }

        return arr;
    }

    inorder(root: BSTNode, output: number[]) {
        if (root == null) {
            return;
        }

        this.inorder(root.left, output);
        output.push(root.data);
        this.inorder(root.right, output);
    }
}