// Implicit binding only depends on the **immediate** caller of the function.

function foo() {
  return this.a;
}

var obj2 = {
  a: 42,
  foo: foo
};

var obj1 = {
  a: 2,
  obj2: obj2
};

// When the engine determines the implicit calling context, it only uses the
// immediate context of the call. Consequently, the following expression
// returns 42.
obj1.obj2.foo();

// A binding for `a` in the outer call is **not** found via implicit binding.
// Consequently, the following statements return `undefined`.
var obj3 = {
  foo: foo
};
var obj4 = {
  a: 2,
  obj3: obj3
};
obj4.obj3.foo();
