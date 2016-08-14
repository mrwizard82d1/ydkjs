// A more typical way to "lose" the implicit binding.

function foo() {
  return this.a;
}

function doFoo(fn) {
  return fn(); // <-- the call site!
}

var obj = {
  a: 2,
  foo: foo
};

var a = "Oops. The value of `a` in the global object.";

// Although the assignment to the `fn` parameter of `doFoo` uses the object,
// `obj.foo`, it **does not** invoke the "implicit binding rule" because the
// **value** bound to `fn` at run time is the unadorned function, `foo`.
//
// In other words, the expression `obj.foo` is **not** a function call, it
// is simply a property dereference.
doFoo(obj.foo);
