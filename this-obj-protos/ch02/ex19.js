// Precedence of explicit (hard) binding and new

function foo(something) {
    this.a = something;
}

var obj1 = {};

// Using hard binding via the ES5 `bind` prints 2
var bar = foo.bind(obj1);
bar(2);
// we could have also used `foo.apply`
// foo.apply(obj1, [2]);
console.log("Hard binding: " + obj1.a);


var baz = new bar(3);
console.log("Hard binding changed: " + (obj1.a != 2));
console.log("New result: " + baz.a);

// new foo.apply(obj1, [2]);

/**
 * The expressions `new foo.call(...)` and `new foo.apply(...)` raises a `TypeError` because neither `foo.call` nor
 * `foo.apply` is a constructor. Because we cannot test the priorities of the new binding rule and the explicit binding
 * rule, we actually use hard binding to perform our test.
 *
 * The result of the test is that `new bar(3)` results in the `a` property of the newly constructed object having the
 * value 3 (instead of 2 for `obj1.a`). Consequently, the new binding rule takes precedence over the explicit binding
 * rule.
 */
