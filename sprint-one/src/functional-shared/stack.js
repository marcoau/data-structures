var makeStack = function() {
  var instance = $.extend({storage: {}, length: 0}, stackMethods);

  // Implement the methods below

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
