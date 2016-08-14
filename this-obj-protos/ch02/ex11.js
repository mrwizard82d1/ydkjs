// This idiom ensures that the explicit binding cannot be "lost."

function foo() {
  console.log(this.a);
}

var obj = {
  a: 2
};

var bar = function() {
  // Inside `bar`, we invoke `foo.call` with a parameter (from the global
  // scope). This call sets `this` in the execution context of `foo` to
  // the parameter supplied to `foo.call` (in this call, `this` is bound
  // to `obj`).
  foo.call(obj);
}

// Invoke a function that internally sets `this` to a specific value.
bar();

// Additionally, because `bar` is a global reference, `this` within `bar`
// is the global object, but that binding does not affect the expression
// `foo.call`.
setTimeout(bar, 0);

// The "Hard-bound" bar can no longer have its `this` overridden because
// `bar` does not use `this` in its execution and its implementation
// invokes `foo.call` with a specific value bound to `this` in the
// execution context of `foo`.
bar.call(window);
