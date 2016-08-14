// An example of explicit binding.

function foo() {
  return this.a;
}

var obj = {
  a: 2
};

// Using `call` allows one to explicitly specify the value bound to `this`.
// With this particular call, `this` will be bound to the value, `obj`.
foo.call(obj);

// Note that even invoking `call` does not prevent losing the binding or
// having a framework overwrite the "intended" value of `this`.
