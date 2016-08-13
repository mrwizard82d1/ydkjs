// Illustrate default rule in strict mode.

function foo() {
  // Because we are in strict mode, the global object is **not** eligible
  // for default binding; consequently, `this` is `undefined` and this code
  // raises an error.
  'use strict';

  this.a;
}

var a = 2;

foo();
