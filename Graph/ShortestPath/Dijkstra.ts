//======================================= Dijkstra.ts ====================================================
//1. Make a Distance array with value INFINITY for all nodes except source node. value for source node will
//   be 0.
//2. Create a parent array with value -1 for all indexes.
//3. Push the node with lowest distance in the priority queue.
//4. While queue is not empty, pop the top and update the distance of all the adjecent nodes if newly
//   calculated distance is smalled then old one. Also push the adjecent nodes which are updated to queue.
//5. If any node is updating the distance of it's adjecent node then that node will become parent of that
//   node.
// Time complexcity = O(ElogV)
//========================================================================================================