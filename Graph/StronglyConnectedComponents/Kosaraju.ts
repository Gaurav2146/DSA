//================================================== KOSARAJU ===========================================
// you need a Stack, Array which will contain strongly connected components and visited array.
//1. Do DFS Traversal of graph and at the time of returning from graph push the node in to stack.
//2. Find transpose of graph.
//3. While stack is not empty Pop node from stack and do DFS TRAVERSAL from that node on transposed graph
//   if the node is not visited.
//4. while returning from node, push the node in an array which will keep track of connected components.
//========================================================================================================

