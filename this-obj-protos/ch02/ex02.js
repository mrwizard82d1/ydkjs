// Illustration of the default (catch-all) rule.

function foo() {
  return this.a;
}

// declares the variable `a` in the global scope
var a = 2;

// The call to `foo` is a plain, unadorned function call. This "context"
// triggers application of the default rule.
//
// This function returns 2 because `this`, at the call site, returns the
// global object (in non-strict mode). The previous line sets the value of
// `a` in the global object to 2, so the expression `this.a` in the function
// `foo` refers to the `a` property of the global object: 2.
foo();
