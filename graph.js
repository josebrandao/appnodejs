function Graph(){
    var vertices = [];//{1}
    var adjList = {}//{2}
};

addVertex = function(v){
    //vertices.push(v);//{3}
    //adjList.set(v,[]);//{4}
};
this.addEdge = function(v,w){
    adjList.get(v).push(w);//{5}
    adjList.get(w).push(v);//{6}
}

graph = new Graph();

myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];

for(let i = 0; i < myVertices.length; i++) {
  graph.addVertex(myVertices[i]);
}
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('C', 'D');
graph.addEdge('C', 'G');
graph.addEdge('D', 'G');
graph.addEdge('D', 'H');
graph.addEdge('B', 'E');
graph.addEdge('B', 'F');
graph.addEdge('E', 'I');

console.log('********* printing graph ***********');

console.log(graph.toString());