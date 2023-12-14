//Exercise #3
/*
{
  name: 'John',
  age: 20,
  hobbies: [ 'Coding', 'Football' ]
}
[
  { orderId: "001", items: ["apple", "banana"] },
  { orderId: "002", items: ["orange", "itim"] },
];
*/

let getJohnProfile = () => {
  return new Promise(function (resolve) {
    setTimeout(
      () =>
        resolve({
          name: "John",
          age: 20,
          hobbies: ["Coding", "Football"],
        }),
      1000
      
    );
  });
};

let getJohnOrders = () => {
  return new Promise(function (resolve) {
    setTimeout(
      () =>
        resolve([
          {
            orderId: "001",
            items: ["apple", "banana"],
          },
          {
            orderId: "002",
            items: ["orange", "itim"],
          },
        ]),
      1500
    );
  });
};

// Start coding here
function b(john) {
  console.log(john) 
  return getJohnOrders()
}
//getJohnProfile().then(b).then(console.log)
console.log(getJohnProfile().then(b).then(console.log))
//console.log(getJohnOrders().then(console.log ))
