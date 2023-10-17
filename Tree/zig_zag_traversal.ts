/*
class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
*/

class zig_zag_traversal {
    //Function to store the zig zag order traversal of tree in a list.
    zigZagTraversal(root: TreeNode) {
        //your code here

        let res: number[] = [];

        let queue = [];
        let front = 0;
        let flag = true;

        queue.push(root);
        queue.push(null);

        let temp_array = [];

        while (queue.length > front) {

            let node: TreeNode = queue[front];

            front++;

            if (node) {
                temp_array.push(node.data);
            }


            if (node == null) {
                if (flag == true) {
                    res = [...res, ...temp_array];
                }
                else {
                    res = [...res, ...(temp_array.reverse())];
                }

                flag = !flag;

                if (queue.length > front) {
                    queue.push(null);
                }

                temp_array = [];
            }

            if (node && node.left) {
                queue.push(node.left);
            }

            if (node && node.right) {
                queue.push(node.right);
            }

        }

        return res;
    }
}