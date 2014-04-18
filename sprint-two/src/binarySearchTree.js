var makeBinarySearchTree = function(value){
  var bst = {};
  bst.value = value;

  bst.left = undefined;
  bst.right = undefined;

  bst.insert = function(num){
    if(num < this.value){
      //push it to left
      if(bst.left === undefined){
        //create new left here
        bst.left = makeBinarySearchTree(num);
      }else{
        bst.left.insert(num);
      }
    }else if(num > this.value){
      //push it to right
      if(bst.right === undefined){
        //create new right here
        bst.right = makeBinarySearchTree(num);
      }else{
        bst.right.insert(num);
      }
    }
  };

  bst.contains = function(target){
    var result = false;
    var walkTheTree = function(bst){
      if(target === bst.value){
        result = true;
      }else if(target < bst.value){
        bst.left && walkTheTree(bst.left);
      }else{
        bst.right && walkTheTree(bst.right);
      }
    };
    walkTheTree(this);
    return result;
  };

  bst.depthFirstLog = function(func){
    func(this);
    this.left && func(this.left);
    this.right && func(this.right);
  };


  return bst;
};
