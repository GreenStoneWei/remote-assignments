function say(something){
  console.log(something);
}

function exec(func, arg){
  func(arg);  // Here we put a function inside a function.
}

exec(say, 'Hi, there');

// this equals to line9
exec(function say(something){
  console.log(something);
}, 'Hi, there 2');

// anoynous function
exec((something) => {
  console.log(something);
}, 'Hi, there 3');


//setTimeout attribute; time unit: ms
window.setTimeout((something) => {
  console.log(something);
}, 3000, 'Greetings, everyone, delay'
)
