//=============================================== PRIM'S ===========================================
//1. Definition - Minimum spanning tree is a spanning tree which has V number of Vertices ans V-1 numner
//   of edges such that total weight of all the edges is minimum.
//
//2. Create a distance array and set all the virtex distance as infinity and source virtex distance 0.
//3. Creat a MST map which will keep track of processed nodes. If a node is processed, it will not be
//   processed again and neither will the distance of processed nodes will be updated.
//4. Make a parent array which will be updated such that if node a has updated the diatance of node b then
//   node A will become parent of node B.
//5. Using this parent array only we will be able to calculate the MST.
//6. Loop for V-1 times.
//7. Take out the node form distance array which has least distance and not processed already.
//8. Add the node to MST map.
//9. Loop to all the adjecent nodes except the processed nodes present in MST map and update the distance
//   of adjecent nodes if the new distance is less that old distance and update the parent array too.
//10.After looping for V-1 times, we will be able to get V-1 edges which will sum to least value if added.
//=====================================================================================================