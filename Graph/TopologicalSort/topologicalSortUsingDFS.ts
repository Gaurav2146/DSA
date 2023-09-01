
//=====================================Topological sort using DFS =========================================
//We can compute a topological sort for a disconnected graph, provided it's a Directed Acyclic Graph (DAG).
// Definition - Topological sort returns vertices of a graph in sorted order in which they are present in graph
// at the time of DFS.
// If there are two vertex u and v and there is a directed edge from u to v then u will always come before v
// in the topological sort.

// Topological sort can be done on only that graph which is Directed and Acyclic.
//Create Adjecency list for your graph.
//Create a STACK.
//Create a visited node map which will tell if the node is visisted or not.
//Do DFS traversal for each node of the graph if it is not visited.
//Imp - when we will return after DFS call from any node then we will put that node data in the stack.
//POP the stack and the result will be a valid topological sort.
//===========================================================================================================