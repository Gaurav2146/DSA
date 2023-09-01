
//===================================== BFS ================================================================




//===========================================================================================================

//===================================== DFS =================================================================
//Create Adjecency list for your graph.
//Create a DFS Visited map which will store the node on which DFS is already done.
//Create a visited node map which will tell if the node is visisted or not.

//Imp - when we will return after DFS call then we will mark DFS visited to false for that node.

// 1. If we find any adjecent node which is already visited and is also present is DFS visited map then it's a cycle.
// 2. If we find any adjecent node which is vsited but it is not present in DFS visited then we will ignore that node.
//===========================================================================================================