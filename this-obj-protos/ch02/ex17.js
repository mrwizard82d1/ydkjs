// Priorities: implicit versus explicit binding

function foo() {
    console.log(this.a);
}

var obj1 = {
    a: 2,
    foo: foo
};

var obj2 = {
    a: 3,
    foo: foo
};

obj1.foo(); // implicit binding results in "2"
obj2.foo(); // implicit binding results in "3"

obj1.foo.call(obj2); // explicit binding results in "3"
obj2.foo.call(obj1); // explicit binding results in "2"

/**
 * Implicit binding produces the sequence in the console [2, 3], but explicit binding produces the sequence [3, 2].
 * Because the explicit binding produces a different sequence than the implicit binding, explicit binding takes
 * precedence over implicit binding.
 *
 * Because explicit binding takes precedence, if both might apply at the call site, choose explicit binding.
 */
