// Demonstrate the distinction between call stack and call site

function baz() {
  // call stack is `baz` so...
  // ...our call site is the global scope
  console.log('baz');
  bar(); // <-- call site for `bar`
}

function bar() {
  // call stack is `baz` -> `bar` (because `baz` calls `bar`) so...
  // ...our call site is in `baz` (because `baz` calls `bar`).
  console.log('bar');
  foo(); // <-- call site for `foo`
}

function foo() {
  // call stack is `baz` -> `bar` -> `foo` (`baz` calls `bar` which
  // calls `foo') so...
  // ... our call site is in `bar`
  console.log('foo');
}

baz(); // <-- call site for `baz`

// The author has a great technique for finding the actual call-site.
// Although a developer should be ablet to determine the call site by
// inspecting the code, it is tedious and error prone without tools.
// An alternative technique is to run the code in the browser debugger
// with a breakpoint occurring at the point you are trying to evaluate
// the value of `this`. When the debugger breaks, find the top of the
// call stack and select the second item from the top. This will be the
// call site.
