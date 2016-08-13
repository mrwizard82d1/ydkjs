// Referring to a function itself requires a name (`this` is **insufficient**).

function foo() {
  // This reference actually refers to the function `foo`
  foo.count = 4;
}

// Before calling `foo`, the value is undefined.
foo.count;

foo();

// Afterward, it actually has the value 4.
foo.count;

// But what about an anonymous function?
setTimeout(function() {
  // With no name, how do I reference this function without a name?

  // One can use `arguments.callee`; however, this expression is deprecated
  // **and** frowned upon.
  // console.log(arguments.callee);
}, 10);

// Note that `setTimeout` returns a integer value identifying the timer used.
// Because I only wait for 10 ms, it is useless.
