import { TreeNode } from './contructTreeFromLevelOrderTraversal';

class ContructTree {

    contructTreeFromPreOrderAndInOrder(preorder: number[], inorder: number[]): TreeNode | null {

        if (inorder.length <= 0 || preorder.length <= 0) {
            return null;
        }

        let root = preorder[0];
        let node = new TreeNode(root);
        let index = inorder.indexOf(root);

        preorder.shift();

        node.left = this.contructTreeFromPreOrderAndInOrder(preorder, inorder.slice(0, index));
        node.right = this.contructTreeFromPreOrderAndInOrder(preorder, inorder.slice(index + 1, inorder.length));

        return node;
    }

    contructTreeFromPostOrderAndInOrder(postorder: number[], inorder: number[]): TreeNode | null {

        if (inorder.length <= 0 || postorder.length <= 0) {
            return null;
        }

        let root = postorder[postorder.length - 1];
        let node = new TreeNode(root);
        let index = inorder.indexOf(root);

        postorder.pop();

        node.right = this.contructTreeFromPostOrderAndInOrder(postorder, inorder.slice(index + 1, inorder.length));
        node.left = this.contructTreeFromPostOrderAndInOrder(postorder, inorder.slice(0, index));

        return node;
    }

    printPostOrder(root: TreeNode | null) {

        if (root == null) {
            return;
        }

        this.printPostOrder(root.left);
        this.printPostOrder(root.right);
        //console.log(root.data);
        process.stdout.write((root.data).toString())
    }

    printpreOrder(root: TreeNode | null) {

        if (root == null) {
            return;
        }

        //console.log(root.data);
        process.stdout.write((root.data).toString())
        this.printpreOrder(root.left);
        this.printpreOrder(root.right);
    }

}


let inorder: number[] = [3, 1, 4, 0, 5, 2];
let preorder: number[] = [0, 1, 3, 4, 2, 5];
let postorder: number[] = [3, 4, 1, 5, 2, 0];

let tree1 = new ContructTree().contructTreeFromPreOrderAndInOrder(preorder, inorder);
let tree2 = new ContructTree().contructTreeFromPostOrderAndInOrder(postorder, inorder);

console.log("=========================================");
console.log(tree1, "tree1");
console.log(tree2, "tree2");
console.log("=========================================");

console.log("=== TREE 1 START ===");
console.log("=== POST ===");
new ContructTree().printPostOrder(tree1);
console.log();
console.log("=== PRE ===");
new ContructTree().printpreOrder(tree1);
console.log();
console.log("=== TREE 1 END ===");
console.log(); console.log();
console.log("=== TREE 2 START ===");
console.log("=== POST ===");
new ContructTree().printPostOrder(tree2);
console.log();
console.log("=== PRE ===");
new ContructTree().printpreOrder(tree2);
console.log();
console.log("=== TREE 2 END ===");

// export class Test {

//     name: string = "GaUrav";

//     print() {
//         for (let i = 0; i < this.name.length; i++) {
//             if (this.name.charCodeAt(i) <= 90 && this.name.charCodeAt(i) >= 65) {
//                 console.log(this.name[i] + " is capital");
//             }
//         }

//     }

//     Rest(first: string, ...parameter: string[]) {
//         console.log(parameter);
//     }

// }

// new Test().print();
// new Test().Rest("1", "2", "3");

// let obj = {
//     name: "RAHUL",
//     print(roll: string) {
//         console.log(this.name);
//     }
// }

// let obj2 = {
//     name: "Chetan"
// }
// obj.print.call(obj2, "1",);
// obj.print.apply(obj2, ["1"]);

