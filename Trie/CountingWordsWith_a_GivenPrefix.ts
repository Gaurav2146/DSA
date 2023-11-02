class Trie_For_Prefix_Count {

    value: string;
    children: Trie_For_Prefix_Count[];
    wordCount: number = 0;

    constructor() {
        this.children = new Array(26).fill(null);
    }

}


function prefixCount(words: string[], pref: string): number {

    let trie = new Trie_For_Prefix_Count();

    for (let i = 0; i < words.length; i++) {
        insert(trie, words[i], 0);
    }

    return search(trie, pref, 0);
};

function search(root: Trie_For_Prefix_Count, input: string, index: number): number {
    if (root == null) {
        return 0;
    }

    if (input.length == index) {
        return root.wordCount;
    }

    let element = input[index];

    let index_to_search = element.charCodeAt(0) - "a".charCodeAt(0);

    return search(root.children[index_to_search], input, index + 1);
}


function insert(root: Trie_For_Prefix_Count, input: string, index: number) {

    if (input.length <= index) {
        return;
    }

    let element = input[index];

    let index_to_insert = element.charCodeAt(0) - "a".charCodeAt(0);

    if (root.children[index_to_insert] == null) {
        let node = new Trie_For_Prefix_Count();
        node.value = element;
        node.wordCount = 1;
        root.children[index_to_insert] = node;
        insert(root.children[index_to_insert], input, index + 1)
    }
    else {
        root.children[index_to_insert].wordCount = root.children[index_to_insert].wordCount + 1;
        insert(root.children[index_to_insert], input, index + 1)
    }
}