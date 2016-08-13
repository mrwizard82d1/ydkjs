// A "hack" of `ex03.js` avoiding the use (and understanding) of `this`
// altogether.
function foo(num) {
  console.log("foo: " + num);

  // keep track of how many times `foo` is called
  data.count++;
}

var data = {
  count: 0
}

var i;
for (i = 0; i < 10; i++) {
  if (i > 5) {
    foo(i);
  }
}

// how many times was `foo` called?
data.count;
