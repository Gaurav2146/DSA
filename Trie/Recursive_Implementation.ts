class recursiveTrieNode {
    left_children: recursiveTrieNode | null;
    right_children: recursiveTrieNode | null;

    constructor() {
        this.left_children = null;
        this.right_children = null;
    }
}

class Recursive_Implementation {
    insert(root: recursiveTrieNode, num: number) {
        for (let i = 31; i >= 0; i--) {
            //Checking if ith bit is 0 or 1.
            let bit: number = (num >> i) & 1;

            if (bit == 0) {
                if (root.left_children != null) {
                    root = root.left_children;
                }
                else {
                    let node = new recursiveTrieNode();
                    root.left_children = node;
                    root = root.left_children;
                }
            }
            else {
                if (root.right_children != null) {
                    root = root.right_children;
                }
                else {
                    let node = new recursiveTrieNode();
                    root.right_children = node;
                    root = root.right_children;
                }
            }
        }
    }

    findMaxXor(root: recursiveTrieNode, num: number): number {

        let xor = 0;

        for (let i = 31; i >= 0; i--) {
            //Checking if ith bit is 0 or 1.
            let bit: number = (num >> i) & 1;

            if (bit == 0) {
                if (root.right_children != null) {
                    xor = xor + (1 << i);
                    root = root.right_children
                }
                else {
                    root = root.left_children;
                }
            }
            else {
                if (root.left_children != null) {
                    xor = xor + (1 << i);
                    root = root.left_children;
                }
                else {
                    root = root.right_children;
                }
            }
        }

        return xor;
    }

    insertArray(nums: number[]) {
        let trieNodeRecursive = new recursiveTrieNode();

        for (let num of nums) {
            this.insert(trieNodeRecursive, num);
        }

        let max_xor = Number.MIN_SAFE_INTEGER;

        for (let num of nums) {
            max_xor = Math.max(max_xor, this.findMaxXor(trieNodeRecursive, num));
        }

        return max_xor;
    }
}

console.log("Recursive_Implementation", new Recursive_Implementation().insertArray([14, 70, 53, 83, 49, 91, 36, 80, 92, 51, 66, 70]));





