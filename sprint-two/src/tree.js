var makeTree = function(value){
  var newTree = $.extend({},treeMethods);
  newTree.value = value;
  newTree.children = [];
  return newTree;
};


var treeMethods = {};

treeMethods.addChild = function(value){
  this.children.push(makeTree(value));
};

treeMethods.contains = function(target){
  var result = false;

  var walkTheTree = function(target, tree) {
    if (tree.value === target) {
      result = true;
    } else {
      for (var i = 0; i < tree.children.length; i++) {
        walkTheTree(target, tree.children[i]);
      }
    }
  };

  walkTheTree(target, this);
  return result;
};

// _.reduce(tree, function (a, b) {
//   return !(!a && !b);
// });
