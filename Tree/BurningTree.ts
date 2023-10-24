// Given a binary tree and a node data called target. Find the minimum time required to burn the complete binary tree if the target is set on fire. It is known that in 1 second all nodes connected to a given node get burned. That is its left child, right child, and parent.
// Note: The tree contains unique values.


// Example 1:

// Input:      
//           1
//         /   \
//       2      3
//     /  \      \
//    4    5      6
//        / \      \
//       7   8      9
//                    \
//                    10
// Target Node = 8
// Output: 7
// Explanation: If leaf with the value 
// 8 is set on fire. 
// After 1 sec: 5 is set on fire.
// After 2 sec: 2, 7 are set to fire.
// After 3 sec: 4, 1 are set to fire.
// After 4 sec: 3 is set to fire.
// After 5 sec: 6 is set to fire.
// After 6 sec: 9 is set to fire.
// After 7 sec: 10 is set to fire.
// It takes 7s to burn the complete tree.
// Example 2:

// Input:      
//           1
//         /   \
//       2      3
//     /  \      \
//    4    5      7
//   /    / 
//  8    10
// Target Node = 10
// Output: 5

// Your Task:  
// You don't need to read input or print anything. Complete the function minTime() which takes the root of the tree and target as input parameters and returns the minimum time required to burn the complete binary tree if the target is set on fire at the 0th second.


// Expected Time Complexity: O(N)
// Expected Auxiliary Space: O(height of tree)


// Constraints:
// 1 ≤ N ≤ 104


class BurningTreeNode {
    key: number;
    left: BurningTreeNode;
    right: BurningTreeNode;

    constructor(x: number) {
        this.key = x;
        this.left = null;
        this.right = null;
    }
}

/**
 * @param {Node} root
 * @param {number} target
 * @return {number}
*/
class BurningTree {
    minTime(root: BurningTreeNode, target: number) {
        //code here

        let parentMap = new Map<BurningTreeNode, BurningTreeNode>();
        this.preorder(root, parentMap);
        let visisted: Set<BurningTreeNode> = new Set();
        let queue: BurningTreeNode[] = [];
        let node = this.searchTargerNode(root, target);
        let res = this.burnTree(visisted, parentMap, queue, node);

        if (res == 0) {
            return 0;
        }
        else {
            return res;
        }
    }

    burnTree(visisted: Set<BurningTreeNode>, parentMap: Map<BurningTreeNode, BurningTreeNode>,
        queue: BurningTreeNode[], node: BurningTreeNode) {
        let count = 0;

        queue.push(node);
        visisted.add(node);

        while (queue.length > 0) {
            let isAnyNodeBurned = false;
            let size = queue.length;
            for (let i = 0; i < size; i++) {
                let node = queue.shift();
                if (node && visisted.has(node) == false) {
                    visisted.add(node);
                    isAnyNodeBurned = true;
                }
                if (node.left && visisted.has(node.left) == false) {
                    visisted.add(node.left);
                    isAnyNodeBurned = true;
                    queue.push(node.left);
                }
                if (node.right && visisted.has(node.right) == false) {
                    visisted.add(node.right);
                    isAnyNodeBurned = true;
                    queue.push(node.right);
                }
                if (parentMap.get(node) && visisted.has(parentMap.get(node)) == false) {
                    let parentNode = parentMap.get(node);
                    visisted.add(parentNode);
                    isAnyNodeBurned = true;
                    queue.push(parentNode);
                }
            }
            if (isAnyNodeBurned == true) {
                count++;
            }
        }

        return count;
    }


    searchTargerNode(root: BurningTreeNode, target: number) {
        if (root == null) {
            return null;
        }

        if (root.key == target) {
            return root;
        }

        let left: BurningTreeNode | null = this.searchTargerNode(root.left, target);
        let right: BurningTreeNode | null = this.searchTargerNode(root.right, target);

        if (left) {
            return left;
        }

        return right;
    }

    preorder(root: BurningTreeNode, map: Map<BurningTreeNode, BurningTreeNode>) {
        if (root == null) {
            return;
        }
        if (root.left) {
            map.set(root.left, root);
        }
        if (root.right) {
            map.set(root.right, root);
        }

        this.preorder(root.left, map);
        this.preorder(root.right, map);
    }
}