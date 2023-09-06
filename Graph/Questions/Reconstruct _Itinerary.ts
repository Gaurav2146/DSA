// You are given a list of airline tickets where tickets[i] = [fromi, toi] 
//represent the departure and the arrival airports of one flight. 
//Reconstruct the itinerary in order and return it.

// All of the tickets belong to a man who departs from "JFK", thus, the itinerary must
// begin with "JFK". If there are multiple valid itineraries, you should return the itinerary 
//that has the smallest lexical order when read as a single string.

// For example, the itinerary ["JFK", "LGA"] has a smaller lexical order than ["JFK", "LGB"].
// You may assume all tickets form at least one valid itinerary. You must use all the tickets 
//once and only once.

// Input: tickets = [["MUC","LHR"],["JFK","MUC"],["SFO","SJC"],["LHR","SFO"]]
// Output: ["JFK","MUC","LHR","SFO","SJC"]

function findItinerary(tickets: string[][]): string[] {

    let adjecencyList = createAdjecencyList(tickets);

    console.log(adjecencyList, "adjecencyList");

    let visitedEdge = new Map<string, boolean>();

    // for(let i=0 ; i < tickets.length; i++)
    // {
    //     let key = tickets[i][0] + "--" + tickets[i][1]
    //     visitedEdge.set(key,false);
    // }

    for (let [key, value] of adjecencyList) {
        for (let i = 0; i < value.length; i++) {
            let visited_key = key + "--" + value[i] + "--" + i;
            visitedEdge.set(visited_key, false);
        }
    }

    let totalNumberOfEdges = tickets.length;
    let src = "JFK";
    let path: string[] = [];

    doDFS(adjecencyList, visitedEdge, totalNumberOfEdges, src, path);

    return path;
};

function doDFS(adjecencyList: Map<string, string[]>, visitedEdge: Map<string, boolean>, totalNumberOfEdges: number, src: string, path: string[]) {
    let isAnyPathAvailable = false;
    path.push(src);
    let node = src;
    let list = adjecencyList.get(node);

    if (list == undefined) {
        for (let [key, value] of visitedEdge) {
            if (value == false) {
                path.pop();
                return false;

            }
        }
    }

    if (list != undefined) {
        for (let i = 0; i < list.length; i++) {
            let key = node + "--" + list[i] + "--" + i;
            if (visitedEdge.get(key) == false) {
                visitedEdge.set(key, true);
                let isAllowed = doDFS(adjecencyList, visitedEdge, totalNumberOfEdges, list[i], path);
                if (isAllowed == false) {
                    visitedEdge.set(key, false);
                }
                else if (isAllowed == true) {
                    isAnyPathAvailable = true;
                }
            }
        }
    }

    if (isAnyPathAvailable == false) {
        let anyUnvisitedEdge = false;
        for (let [key, value] of visitedEdge) {
            if (value == false) {
                anyUnvisitedEdge = true;
                break;
            }
        }
        if (anyUnvisitedEdge == false) {
            return true;
        } else {
            path.pop();
            return false;
        }
    }

    return isAnyPathAvailable;

}

function createAdjecencyList(tickets: string[][]): Map<string, string[]> {

    let map: Map<string, string[]> = new Map();

    for (let i = 0; i < tickets.length; i++) {
        if (map.has(tickets[i][0])) {
            let destArr = map.get(tickets[i][0])
            if (destArr) {
                destArr.push(tickets[i][1]);
                destArr.sort()
            }
        }
        else {
            map.set(tickets[i][0], [tickets[i][1]])
        }
    }

    return map;
}