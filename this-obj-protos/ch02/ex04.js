// Strict mode only affects the default binding of the global object at
// the invocation of `this.a`; using strict mode at the call site *fails*
// to affect default binding at all.

function foo() {
  return this.a;
}

var a = 2;

(function() {
  "use strict";

  // Even though strict mode is in affect at the call site, because it
  // not in affect inside `foo`, the default binding rule is unaffected;
  // that is, the default binding rule **applies**.
  //
  // As a result, the following call to `foo` returns 2 to the caller.
  return foo();
})();
