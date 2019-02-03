function delayedResult(n1, n2, delayTime, callback){
  if ( isNaN(n1) || isNaN(n2) || isNaN(delayTime) || typeof(callback) !== 'function'){
    console.log('The data type of n1, n2 and delayTime have to be Number, and callback has to be a function.');
  } else { // End if
    var result = n1 + n2
    setTimeout(()=>{callback(result)}, delayTime);
  } // End else
} // End delayedResult function

// function showSurprise(){
//   console.log('surprise');
// }
// setTimeout(showSurprise, 4000);
//
// // Step 1: Function expression, assign into a variable
//
// const arrowSurprise = function(){
//   console.log('surprise');
// }
//
// // Convert to anonymous function, delete variable. Anonymous isn't used outside a callback function, so cut and paste in setTimeout function.
//
// function(){
//   console.log('surprise');
// }
//
// //
//
// setTimeout(function(){
//   console.log('surprise');
// }, 4000);
//
// // Make it an arrow Function
//
// setTimeout( () => {
//   console.log('surprise');
// }, 4000);
