var makeQueue = function(){
  var instance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  // Implement the methods below

  instance.enqueue = function(value){
    storage[size++] = value;
  };

  instance.dequeue = function(){
    if(size > 0){
      var result = storage[0];
      for(var i = 0; i < size; i++){
        storage[0] = storage[1];
      }
      delete storage[--size];
      return result;
    }
  };

  instance.size = function(){
    return size;
  };

  return instance;
};
