function convertToAdjList(adjMatrix) 
{
  let adjList = [];
  for (let row = 0; row < adjMatrix.length; row++) 
  {
    let edgeLink = [];
    for (let column = 0; column < adjMatrix.length; column++) 
    {
      if (adjMatrix[row][column] == 1) 
      {
        edgeLink.push(column);
      }
    }
    adjList.push(edgeLink);
  }
  return adjList;
}
