class TrieNode {
    left: TrieNode | null = null;
    right: TrieNode | null = null;
}

 function insert(root: TrieNode, num: number): void {
        let curr: TrieNode = root;

        for (let i = 31; i >= 0; i--) {
            const bit: number = (num >> i) & 1;
            if (bit === 0) {
                if (!curr.left) {
                    curr.left = new TrieNode();
                }
                curr = curr.left;
            } else {
                if (!curr.right) {
                    curr.right = new TrieNode();
                }
                curr = curr.right;
            }
        }
}

function getMaxXor(root: TrieNode, num: number): number {
        let curr: TrieNode = root;
        let maxXor: number = 0;

        for (let i = 31; i >= 0; i--) {
            const bit: number = (num >> i) & 1;
            if (bit === 0) {
                if (curr.right) {
                    curr = curr.right;
                    maxXor += Math.pow(2, i);
                } else {
                    curr = curr.left;
                }
            } else {
                if (curr.left) {
                    curr = curr.left;
                    maxXor += Math.pow(2, i);
                } else {
                    curr = curr.right;
                }
            }
        }

        return maxXor;
}

function findMaximumXOR(nums: number[]): number {
        const root: TrieNode = new TrieNode();
        let maxXor: number = Number.MIN_SAFE_INTEGER;

        for (const num of nums) {
            insert(root, num);
        }

        for (const num of nums) {
            maxXor = Math.max(maxXor, getMaxXor(root, num));
        }

        return maxXor;
}


console.log( findMaximumXOR([14, 70, 53, 83, 49, 91, 36, 80, 92, 51, 66, 70]) );

