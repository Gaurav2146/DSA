
// class Trie_Node {
//     value: string;
//     children: Trie_Node[];
//     isEnd: boolean = false;

//     constructor() {
//         this.children = new Array(26).fill(null);
//     }
// }


// function longestDupSubstring(s: string): string {

//     let result = { result: "" };

//     let root = new Trie_Node();

//     let low = 0;
//     let high = s.length - 1;

//     while (low <= high) {
//         let mid = Math.floor((low + high) / 2);

//         console.log(mid, "mid");

//         if (mid < 0) {
//             break;
//         }

//         let start = 0;
//         let end = mid;

//         while (end <= s.length - 1) {
//             insert(root, s.substring(start, end + 1), 0, result, "");
//             start++;
//             end++;
//         }

//         root = new Trie_Node();

//         if (result.result.length > mid) {
//             low = mid + 1;
//         }
//         else {
//             high = mid - 1;
//         }

//     }

//     return result.result;
// };

// function insert(root: Trie_Node, input: string, index: number, result: { result: string }, output: string) {

//     if (root == null) {
//         return;
//     }

//     if (index > input.length) {
//         return;
//     }

//     if (index == input.length) {
//         if (root.isEnd == true) {
//             let len = result.result.length;

//             if (output.length > len) {
//                 result.result = output;
//             }
//         }
//         else {
//             root.isEnd = true;
//         }

//         return;
//     }

//     let element_to_insert = input[index];

//     let index_to_insert = element_to_insert.charCodeAt(0) - "a".charCodeAt(0);

//     if (root.children[index_to_insert] == null) {
//         let node = new Trie_Node();
//         node.value = element_to_insert;
//         root.children[index_to_insert] = node;

//         insert(root.children[index_to_insert], input, index + 1, result, output + root.children[index_to_insert].value);
//     }
//     else {
//         insert(root.children[index_to_insert], input, index + 1, result, output + root.children[index_to_insert].value);
//     }
// }



function longestDupSubstring(S:string) {
    // convert string to char code array
    const charArr = [...S].map(x => x.charCodeAt(0) - 'a'.charCodeAt(0));
    const SIZE = S.length;
    
    // Binary Search
    let low = 1, high = SIZE, maxLen = [0, 0];
    
    while(low <= high) {
        const mid = Math.floor((low + high) / 2);
        const result = rollingHash(mid);
        
        if(!result.length) high = mid-1;
        else {
            maxLen = result;
            low = mid+1;
        }
    }
    
    return S.slice(maxLen[0], maxLen[1]);
    
    // Rolling hash algorithm
    function rollingHash(len:number) {
        const seen = new Set();
        const PRIME = 2**47 - 1;
        const BASE = 26;
        let MOST_SIG_DIGIT = 1;
        let hashKey = 0;
        
        for (let i = 0; i < len; i++) {
            // generate the most significat digit
            MOST_SIG_DIGIT = (MOST_SIG_DIGIT * BASE) % PRIME;
            // build the initial hash window
            hashKey = (hashKey * BASE + charArr[i]) % PRIME;
        }

        seen.add(hashKey);

        for (let i = len; i < SIZE; i++) {
            hashKey *= BASE;
            // remove the first char
            hashKey -= MOST_SIG_DIGIT * charArr[i-len] % PRIME;
            hashKey += PRIME;
            // add the next char
            hashKey = (hashKey + charArr[i]) % PRIME;

            if (seen.has(hashKey)) return [i-len+1, i+1];
            seen.add(hashKey);
        }
        return [];
    }
};