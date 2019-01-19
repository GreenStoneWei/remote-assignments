// data = {
//   size: 3,
//   products: [
//     {
//     name:"Product 1",
//     price:100
//     },
//     {
//     name:"Product 2",
//     price:700
//     },
//     {
//     name:"Product 3",
//     price:250
//     }
//   ]
// };


var avgObj = {
  size: 3,
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
};

for ( var prop in avgObj ) {
  let avg_list = [];
  console.log(avgObj.products);
  // console.log(avgObj[prop]);
  // console.log(avgObj.products.length);
  for (let c = 0 ; c < avgObj[prop].length ; c+=1 ){
    avg_list.push(avgObj[prop][c].price);
  }
  console.log(avg_list);
  // console.log(avg_list.reduce());
  // var avg = Math.avg(avg_list)
}
//
// function test({a:1,b:2}){
//   console.log(this.a + this.b)
// }

// console.log(Object.entries({
//   size: 3,
//   products: [
//     {
//     name:"Product 1",
//     price:100
//     },
//     {
//     name:"Product 2",
//     price:700
//     },
//     {
//     name:"Product 3",
//     price:250
//     }
//   ]
// }));
