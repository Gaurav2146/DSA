/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     neighbors: Node[]
 *     constructor(val?: number, neighbors?: Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.neighbors = (neighbors===undefined ? [] : neighbors)
 *     }
 * }
 */

interface Node {
    val: number,
    neighbors: Node[]
}

function cloneGraph(node: Node | null): Node | null {
    if (node) {
        let visitedNodes = new Set<number>();
        let cloneNode = new Node();
        visitedNodes.add(node.val);
        let nodeMap = new Map<number, Node>();
        nodeMap.set(node.val, cloneNode);
        doDfs(node, cloneNode, visitedNodes, nodeMap);
        return cloneNode;
    }

    return null;
};

function doDfs(node: Node | undefined, cloneNode: Node | undefined, visitedNodes: Set<number>, nodeMap: Map<number, Node>) {

    if (cloneNode && node) {
        cloneNode.val = node.val;

        let neighbourClone: Node[] = [];

        for (let i = 0; i < node.neighbors.length; i++) {
            let adjClone: Node = new Node();
            if (nodeMap.has(node.neighbors[i].val)) {
                let adjNodeClone = nodeMap.get(node.neighbors[i].val);
                if (adjNodeClone != undefined) {
                    adjClone = adjNodeClone;
                }
                neighbourClone.push(adjClone);
            }
            else {
                nodeMap.set(node.neighbors[i].val, adjClone);
                neighbourClone.push(adjClone);
            }

            if (visitedNodes.has(node.neighbors[i].val) == false) {
                visitedNodes.add(node.neighbors[i].val);
                doDfs(node.neighbors[i], adjClone, visitedNodes, nodeMap)
            }
        }

        cloneNode.neighbors = neighbourClone;
    }
}