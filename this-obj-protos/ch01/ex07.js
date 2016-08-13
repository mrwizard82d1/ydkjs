// We can force `this` to refer to the function `foo` by explicitly calling
// `foo.call`.

function foo(num) {
  // Report the call...
  console.log('foo: ' + num);

  // And remember the call count.
  this.count++;
}

// Initialize the call count.
foo.count = 0;

var i;
for (i = 0; i < 10; i++) {
  if (i > 5) {
    // We use `call` to ensure that `this` points at the function `foo` itself.
    foo.call(foo, i);
  }
}

// How many times have we called `foo`?
foo.count;
