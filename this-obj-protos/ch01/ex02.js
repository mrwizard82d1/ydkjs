// These functions specify an explicit context (value for `this`).

function identify(context) {
  return context.name.toUpperCase();
}

function speak(context) {
  var greeting = "Hello, I'm " + identify(context);
  console.log(greeting);
  return greeting;
}

var me = {
  name: 'Kyle'
}

var you = {
  name: 'Larry'
}

identify(you);
speak(me);
