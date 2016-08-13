// An attempt to use `this` to "add" a scope to a call.

function foo() {
  var a = 2;
  this.bar();
}

function bar() {
  // An attempt to reference `a`, a local variable within `foo`, via a closure.
  console.log('a = ' + this.a);
}

// The book indicates that this call should raise a `ReferenceError`; instead,
// the behavior I observe is that `bar` reports that `this.a` is `undefined`.
foo();
