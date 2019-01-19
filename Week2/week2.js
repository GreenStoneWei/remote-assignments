// Assignment 1: Function and Array
console.log('Week 2 Assignment 1: Call function max() to show the results.');

function max(...args){
  let biggest_index = 0;
  for (i = 0; i < args.length-1 ; i += 1){
    if (args[biggest_index] >= args[i+1]){
      biggest_index = biggest_index;
    } else {
      biggest_index = i+1;
    }
  }
  return args[biggest_index];
}

// Assignment 2: Object
console.log('Week 2 Assignment 2: Create a proper object as a parameter of the calculate function.')

function calculate(args) {
  let result;
  if (args.op === "+") {
    result = args.n1 + args.n2;
  } else if (args.op === "-") {
    result = args.n1-args.n2;
  } else {
    result = "Not supported";
  }
  return result;
}

// First way: Use construction function. This seems the most proper for this circumstance.
function inputCal(op, n1 ,n2){
  this.op = op,
  this.n1 = n1,
  this.n2 = n2
}
console.log("  First way: use construction function. Try: calculate(new inputCal('op', n1, n2))");

// Second way: Object.create method
var arg2 = {};
var inputObj = Object.create(arg2);
inputObj.op = '-';
inputObj.n1 = '5';
inputObj.n2 = '2';

console.log("  Second way: use Object.create() method. Try calculate(arg2)");

// Third way: Use array syntax
var inputObj3 = {};
inputObj3['op'] = '+';
inputObj3['n1'] = 55;
inputObj3['n2'] = 45;
console.log("  Third way: use Object.create() method. Try calculate(inputObj3)");



// Assignment 3: Function, Array, and Object

function avg(data){
  for ( let key in data ) {
    let value = data[key];
    if ( key === 'products' ){
      var total = 0
      for (let i = 0; i < value.length; i +=1 ){
        total += value[i]['price'];
      }
      var finalAvg = total / value.length;
    }
  }
  return finalAvg;
}
console.log(
  avg(
    { size: 3,
      products: [
        {
        name:"Product 1",
        price:100
        },
        {
        name:"Product 2",
        price:700
        },
        {
        name:"Product 3",
        price:250
        }
      ]
    }
  )
);
