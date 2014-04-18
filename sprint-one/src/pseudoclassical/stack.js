var Stack = function() {
  // Hey! Copy your code from src/prototypal/stack.js and paste it here
  this.storage = {};
  this.length = 0;
};

// var backup = Stack.prototype;
Stack.prototype = $.extend(Stack.prototype, {
  push: function(value) {
    this.storage[this.length] = value;
    this.length++;
  },
  pop: function(){
    if(this.length > 0){
      var result = this.storage[--this.length];
      delete this.storage[this.length];
      return result;
    }
  },
  size: function(){
    return this.length;
  }

});

var instance = new Stack();

//Comparing speeds of 4 instantiation methods:
//http://jsperf.com/function-instantiation-methods
