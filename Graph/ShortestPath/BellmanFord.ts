//=================================== BellmanFord Ford ==================================================
//1. It can detect negative edge weight cycle.
//2. Create a distance array where value for all the nodes is INFINITY and for source node it will be 0.
//3. Create a parent array and initialize the value to -1.
//4. Loop for V-1 times where V is the number of vertex in the graph.
//5. Loop for all the edges of the graph and update the distance of destination vertex according to
//   the formula if dist[src] + weight[src][dest] < dist[dest] and also update the parent of dest to src.
//6. After doint the same process for V-1 time, come out of the outer loop.
//7. Loop through all the edges again and if you find any distance getting updated then it means there
//   is an negative edge weight cycle.
//8. If no distance is updated then the parent array will return single source sortest path.
//9. Time Complexity - O(E*V).
//=========================================================================================================

