// Create a hard-binding that passes arguments and returns a result.

function foo(something) {
    // Logs `this.a` and its arguments (`something`), separated by a single space.
    console.log(this.a, something);

    // Returns the sum of `this.a` and `something`.
    return this.a + something;
}

var obj = {
    a: 2
};

var bar = function() {
    // Do not invoke `foo.call` (which does not allow additional arguments), but invoke `foo.apply` which calls the
    // global value `foo` (the function) with all the arguments passed to `bar`.
    return foo.apply(obj, arguments);
};

// Invoke the global `foo` with the additional `arguments` 3. The function, `foo`, will then log `this.a` (from the
// specified context, `obj` and the additional arguments passed as `something`.
var b = bar(3);

// Log the return value so I can see it.
console.log(b);