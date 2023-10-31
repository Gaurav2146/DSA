
class Trie_Node {
    value: string;
    children: Trie_Node[];
    isEnd: boolean = false;

    constructor() {
        this.children = new Array(26).fill(null);
    }
}


function longestDupSubstring(s: string): string {

    let result = { result: "" };

    let root = new Trie_Node();

    let low = 0;
    let high = s.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        console.log(mid, "mid");

        if (mid < 0) {
            break;
        }

        let start = 0;
        let end = mid;

        while (end <= s.length - 1) {
            insert(root, s.substring(start, end + 1), 0, result, "");
            start++;
            end++;
        }

        root = new Trie_Node();

        if (result.result.length > mid) {
            low = mid + 1;
        }
        else {
            high = mid - 1;
        }

    }

    return result.result;
};

function insert(root: Trie_Node, input: string, index: number, result: { result: string }, output: string) {

    if (root == null) {
        return;
    }

    if (index > input.length) {
        return;
    }

    if (index == input.length) {
        if (root.isEnd == true) {
            let len = result.result.length;

            if (output.length > len) {
                result.result = output;
            }
        }
        else {
            root.isEnd = true;
        }

        return;
    }

    let element_to_insert = input[index];

    let index_to_insert = element_to_insert.charCodeAt(0) - "a".charCodeAt(0);

    if (root.children[index_to_insert] == null) {
        let node = new Trie_Node();
        node.value = element_to_insert;
        root.children[index_to_insert] = node;

        insert(root.children[index_to_insert], input, index + 1, result, output + root.children[index_to_insert].value);
    }
    else {
        insert(root.children[index_to_insert], input, index + 1, result, output + root.children[index_to_insert].value);
    }
}