Array.prototype.mapByTwo = function(fun /*, thisp*/) {
  if (typeof fun != "function")
    throw new TypeError();

  var len = this.length >>> 0;
  var thisp = arguments[1];
  var k = 0;
  var A = new Array(Math.ceil(len/2));

  if (len/2 < A.length) {
    this.push(null);
  }

  for (var i = 0; i < len; i++) {
    if (i in this) {
      A[k] = fun.call(thisp, this[i], this[++i], --i, ++i, this);
    }
    k++;
  }

  return A;

};