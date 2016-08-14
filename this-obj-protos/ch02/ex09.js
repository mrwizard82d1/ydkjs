// Losing the "implicit binding" occurs with built-ins, also.

function foo() {
  console.log(this.a);
}

var obj = {
  a: 42,
  foo: foo
};

var a = "Oops. Global binding again!";

// Assigning the internal function via `obj.foo` still results in calling
// `foo()` at the (internal) call site. This call invokes the "default
// binding rule" and referencing the value of `a` of the global object.
setTimeout(obj.foo, 10);
