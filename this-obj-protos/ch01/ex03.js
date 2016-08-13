function foo(num) {
  var result = "foo: " + num;
  this.count++;
  return result;
}

foo.count = 0;

for (i = 0; i < 10; i++) {
  if (i > 5) {
    console.log(foo(i));
  }
}

// We think we have implemented `foo.count`; however, we've actually created
// and incremented a global variable named `count`. The author, in a note,
// tells us to wait for chapter 2 to understand this process.
foo.count;

