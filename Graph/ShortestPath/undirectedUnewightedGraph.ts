//==================================================================================
//
//1. Do BFS traversal on the graph.
//
//2. Create a visited array and only do BFS traversal if the node is not visited.
//
//3. Create a parent array and update it accordingly.
//
//4. Use parent array to trace the path form source node to destination.
//
//5. Using BFS if you reach to destination node first then only that node
//   will be set as parent of destination node and any node reachig destination node
//   after that will not be considered as parent of destination node because destination
//   node is already visited and we do not process visited nodes.
//
//6. And in BFS we travel all nodes of single loop then only we go to next level.
//
//7. so, If any node has reached first to destination node then that node has
//   least number of levels from source to destination. in sort least number of edges
//   from source to destination.
//
//8. Thats why if we traverce from destination node to source node using parent array
//   we will get the sortest path.
//
//====================================================================================



