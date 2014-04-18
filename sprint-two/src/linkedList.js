var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var node = makeNode(value);
    if(list.head !== null){
      //Not empty
      var lastTail = list.tail;
      lastTail.next = node;
    }else{
      //empty
      list.head = node;
    }
    list.tail = node;
  };

  list.removeHead = function(){
    var result = list.head.value;
    list.head =  list.head.next;
    return result;
  };

  list.contains = function(target, node){
    if(node === undefined) { return list.contains(target, list.head); } // first node
      //normal node
    return target === node.value ? true : (node.next !== null ?
      list.contains(target, node.next) : false);
    //list.contains(target, node.next)
  };

  return list;
};

var makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null;

  return node;
};
