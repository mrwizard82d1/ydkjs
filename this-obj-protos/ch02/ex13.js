// A reusable helper for hard-binding.

function foo(something) {
    console.log(this.a, something);
    return this.a + something;
}

// A simple `bind` helper.
function bind(fn, obj) {
    // Returns a function which binds `this` inside the execution context of `fn` and supplies additional `arguments`.
    return function() {
        return fn.apply(obj, arguments);
    }
}

var obj = {
    a: 2
}

// Bind `this` to `obj` inside of `foo`.
var bar = bind(foo, obj);

var b = bar(3);
console.log(b);