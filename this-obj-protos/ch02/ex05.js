// Illustration of implicit binding rule
//
// Implicit binding occurs when one invokes a function (a callable) in the
// context of another object.
//
// It does not matter that the function was originally definal in a lexical
// environment that contained no object with a property named `a`.

function foo() {
  return this.a;
}

var obj = {
  a: 2,
  // Because `foo` is defined in the global scope, the `foo` property of
  // this object is bound to the function named `foo` defined in the global
  // scope.
  foo: foo
}

// The call site of foo defines the context of the call, the object, `obj`,
// defined previously.
obj.foo();
