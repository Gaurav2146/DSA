
class WordLadder {

    words: string[] = []
    start: string
    end: string
    adjecencList: Map<string, string[]> = new Map()

    constructor(words: string[], start: string, end: string) {
        this.words = words;
        this.start = start;
        this.end = end;
    }

    calculateAdjecencyList() {

        let wordArr = [this.start, ...this.words];

        for (let i = 0; i < wordArr.length; i++) {
            for (let j = i + 1; j < wordArr.length; j++) {
                let flag = this.calculateSingleDifference(wordArr[i], wordArr[j]);

                if (flag) {
                    if (this.adjecencList.has(wordArr[i])) {
                        let list = this.adjecencList.get(wordArr[i]);
                        list?.push(wordArr[j]);
                    } else {
                        this.adjecencList.set(wordArr[i], [wordArr[j]])
                    }

                    if (this.adjecencList.has(wordArr[j])) {
                        let list = this.adjecencList.get(wordArr[j]);
                        list?.push(wordArr[i]);
                    } else {
                        this.adjecencList.set(wordArr[j], [wordArr[i]])
                    }
                }

            }
        }

    }

    calculateSingleDifference(word1: string, word2: string): boolean {
        let diff = 0;
        for (let i = 0; i < word1.length; i++) {
            if (word1[i] != word2[i]) {
                diff++;
            }
        }
        if (diff == 1) {
            return true;
        }
        return false;
    }

    dikstraAlgo() {

        let distance: Map<string, number> = new Map();
        let parent: Map<string, string> = new Map();

        let wordArr = [this.start, ...this.words];

        for (let i = 0; i < wordArr.length; i++) {
            distance.set(wordArr[i], Number.MAX_SAFE_INTEGER)
            parent.set(wordArr[i], "")
        }

        let source = "hit";
        distance.set(source, 0);

        let queue = [];

        queue.push(source);

        while (queue.length != 0) {

            console.log(queue, "queue")

            let node = queue.pop();

            let list: string[] | undefined = [];

            if (node) {

                list = this.adjecencList.get(node);

                if (list) {
                    for (let i = 0; i < list?.length; i++) {

                        let adj = list[i];

                        let newDis = distance.get(node);
                        let oldDis = distance.get(adj);

                        if (newDis != undefined && oldDis != undefined && newDis + 1 < oldDis) {
                            distance.set(adj, newDis + 1);
                            parent.set(adj, node)
                            queue.push(adj);
                            queue = this.putMinimumInTheBeginning(queue, distance);
                        }
                    }
                }
            }
        }
        console.log(distance, "distance");
        console.log(parent, "parent");
    }

    putMinimumInTheBeginning(queue: string[], distance: Map<string, number>): string[] {

        let min_distance = Number.MAX_SAFE_INTEGER;
        let min_distance_index = 0;
        let min_distance_node = queue[0];

        for (let i = 0; i < queue.length; i++) {
            let dis = distance.get(queue[i]);
            if (dis && dis < min_distance) {
                min_distance = dis;
                min_distance_index = i;
                min_distance_node = queue[i];
            }
        }

        queue.splice(min_distance_index, 1);
        queue.push(min_distance_node);
        return queue;
    }

}

let obj = new WordLadder(["hot", "dot", "dog", "lot", "log", "cog"], "hit", "cog");

obj.calculateAdjecencyList();

console.log(obj.adjecencList);

console.log(obj.dikstraAlgo());