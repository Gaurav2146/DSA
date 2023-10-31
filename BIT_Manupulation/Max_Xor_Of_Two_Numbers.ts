class TrieNode {
    left: TrieNode | null = null;
    right: TrieNode | null = null;
}

 function insert(root: TrieNode, num: number,MaxNumberOfBits:number): void {
        let curr: TrieNode = root;

        for (let i = MaxNumberOfBits; i >= 0; i--) {
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

function getMaxXor(root: TrieNode, num: number,MaxNumberOfBits:number): number {
        let curr: TrieNode = root;
        let maxXor: number = 0;

        for (let i = MaxNumberOfBits; i >= 0; i--) {
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

function findMaximumXOR(nums: number[]): number{
        const root: TrieNode = new TrieNode();
        let maxXor: number = Number.MIN_SAFE_INTEGER;

        let res = findMaxValueAndMaxSizeOfBits(nums);
        
        for (const num of nums) {
            insert(root, num , res);
        }

        for (const num of nums) {
            maxXor = Math.max(maxXor, getMaxXor(root, num, res));
        }

        return maxXor;
}

function findMaxValueAndMaxSizeOfBits(nums: number[]): number {

    let max = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > max) {
            max = nums[i];
        }
    }

    return findBitRepresentation(max);
}

function findBitRepresentation(num: number): number {
    let res = "";
    while (num != 0) {
        res = num % 2 + res;

        num = Math.floor(num / 2);
    }
    return res.length;
}

console.log( findMaximumXOR([14, 70, 53, 83, 49, 91, 36, 80, 92, 51, 66, 70]) );

