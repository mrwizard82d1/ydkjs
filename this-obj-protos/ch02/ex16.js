// Illustrating the "new rule"

// A function used as a "constructor" sets the value of a newly constructed object.
function foo(a) {
    // Sets the `a` property to the value of the parameter `a`.
    this.a = a;
}

// "Construct" an object initializing the property `a` to 2.
var bar = new foo(2);

console.log(bar.a);