var makeQueue = function(){
  // Hey! Copy your code from src/functional/queue.js and paste it here
  var instance = Object.create(queueMethods);
  instance.storage = {};
  instance.length = 0;
  return instance;

};

var queueMethods = {
  enqueue: function(value){
      this.storage[this.length++] = value;
  },
  dequeue: function(){
    if(this.length > 0){
      var result = this.storage[0];
      for(var i = 0; i < this.length; i++){
        this.storage[0] = this.storage[1];
      }
      delete this.storage[--this.length];
      return result;
    }
  },
  size: function(){
    return this.length;
  }
};
