var makeStack = function() {
  var instance = Object.create(stackMethods);
  instance.storage = {};
  instance.length = 0;

  return instance;
};

var stackMethods = {
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
};
