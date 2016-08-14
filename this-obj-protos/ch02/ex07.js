// Implicit binding lost via aliasing.

function foo() {
  return this.a;
}

var obj = {
  a: 2,
  foo: foo
};

// Creates an alias for `obj.foo`. However, the value returned by `obj.foo`
// is the **global** function `foo`. The fact that we arrived at this value
// through `obj` does not change the value to be called later.
var bar = obj.foo;

var a = "Oops. The global value of `a`.";

// The value, `bar` is an alias for the value, `foo`. Because `bar` / `foo`
// is invoked using a plain, undecorated call, `this` inside of `foo` will
// actually refer to the **global** object. (Since the "implicit binding
// rule" does **not** apply, we apply the "global binding rule.")
bar();

// A call through `obj` results in applying the "implicit binding rule."
obj.foo();
