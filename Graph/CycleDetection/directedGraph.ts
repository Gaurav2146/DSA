
//===================================== BFS ================================================================
//Create Adjecency list for your graph.
//Create a parent map which will store the parent node data of each node.
//Create a visited node map which will tell if the node is visisted or not.

// 1. If we find any adjecent node which is already visited but it is not the parent node then it's a cycle.
// 2. If we find any adjecent node which is vsited but it is the parent node then we will ignore that node.
//===========================================================================================================

//===================================== DFS =================================================================
//Create Adjecency list for your graph.
//Create a DFS Visited map which will store the node on which DFS is already done.
//Create a visited node map which will tell if the node is visisted or not.

//Imp - when we will return after DFS call then we will mark DFS visited to false for that node.

// 1. If we find any adjecent node which is already visited and is also present is DFS visited map then it's a cycle.
// 2. If we find any adjecent node which is vsited but it is not present in DFS visited then we will ignore that node.
//===========================================================================================================