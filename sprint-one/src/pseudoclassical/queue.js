var Queue = function() {
  // Hey! Copy your code from src/prototypal/queue.js and paste it here
  this.storage = {};
  this.length = 0;
};

Queue.prototype.enqueue = function(value){
  this.storage[this.length++] = value;
};

Queue.prototype.dequeue = function(){
  if(this.length > 0){
    var result = this.storage[0];
    for(var i = 0; i < this.length; i++){
      this.storage[0] = this.storage[1];
    }
    delete this.storage[--this.length];
    return result;
  }
};

Queue.prototype.size = function(){
  return this.length;
};

var instance = new Queue();
console.log(instance.__proto__);

