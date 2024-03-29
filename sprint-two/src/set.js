var makeSet = function(){
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  this._storage[item] = 1;
};

setPrototype.contains = function(item){
  return this._storage.hasOwnProperty(item);
};

setPrototype.remove = function(item){
  delete this._storage[item];
};
