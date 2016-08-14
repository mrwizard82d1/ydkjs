// Libraries and built-ins often support callers supplying a context used as `this`

function foo(e1) {
    console.log(e1, this.id);
}

var obj = {
    id: 'awesome'
};

// use `obj` as `this` for calls to `foo(...)`
[1, 2, 3].forEach(foo, obj);