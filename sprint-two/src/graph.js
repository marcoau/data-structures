var Graph = function(){
  this._storage = {

  };
  this._size = 0;
};

Graph.prototype.addNode = function(newNode, toNode){
  this._storage[newNode] = [];
  if (this._size === 1 && !toNode) {
    this.addEdge(newNode, Object.keys(this._storage)[0]);
  }
  if (toNode) { this.addEdge(newNode, toNode); }
  this._size++;
};

Graph.prototype.contains = function(node){
  return this._storage.hasOwnProperty(node);
};

Graph.prototype.removeNode = function(node) {
  var edges = this._storage[node];
  for (var i = 0; i < edges.length; i++) {
    var position = this._storage[edges[i]].indexOf(node);
    this._storage[edges[i]].splice(position, 1);
  }
  delete this._storage[node];
  this._size--;
  this.removeIsolates();
};

Graph.prototype.getEdge = function(fromNode, toNode){
  return (this._storage[fromNode].indexOf(toNode) > -1);
};

Graph.prototype.addEdge = function(fromNode, toNode){
  this._storage[fromNode].push(toNode);
  this._storage[toNode].push(fromNode);
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  var fromPos = this._storage[fromNode].indexOf(toNode);
  var toPos = this._storage[toNode].indexOf(fromNode);
  this._storage[fromNode].splice(fromPos, 1);
  this._storage[toNode].splice(toPos, 1);
  this.removeIsolates();
};

Graph.prototype.removeIsolates = function() {
  for (var nodeKey in this._storage) {
    (this._storage[nodeKey].length === 0) && this.removeNode(nodeKey);
  }
};
