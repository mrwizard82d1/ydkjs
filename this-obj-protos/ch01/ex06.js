// Using `foo` directly allows one to capture the number of calls; however,
// we still have not learned the correct usage of `this`.

function foo(num) {
  // What is `num`?
  console.log('foo: ' + num);

  // Remember the call count.
  foo.count++;
}

// Initialize the property to 0 (otherwise, it is `undefined`).
foo.count = 0;

var i;
for (i = 0; i < 10; i++) {
  if (i > 5) {
    // Call `foo` but not for all `i`
    foo(i);
  }
}

// How many times was `foo` called?
foo.count;

// Finally, we see that `foo` was called 4 times (once for i in [6, 7, 8, 9]).
