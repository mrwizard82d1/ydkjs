// Test precedence of new binding rule

function foo(something) {
    this.a = something;
}

var obj1 = {
    foo: foo
};

var obj2 = {};

// Implicit binding prints 2
obj1.foo(2);
console.log("Implicit result: " + obj1.a);

// Explicit binding prints 3
obj1.foo.call(obj2, 3);
console.log("Explicit results: " + obj2.a);

// New binding prints 2 for `obj1.a` (unchanged) but 4 for `bar.a` (the result of the `new` expression)
var bar = new obj1.foo(4);
console.log("Has implicit changed? " + (obj1.a != 2));
console.log("New results: " + bar.a);

/**
 * Because the `a` property of the object returned by the `new` expression has the value 4, the "new binding rule"
 * takes precedence over implicit.
 */
