//Exercise #1
/*{
  name: 'John',
  age: 20,
  hobbies: [ 'Coding', 'Football' ]
}*/

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
// Start coding here
function aa(i) {
  console.log(i.name+"hm")
 }
//console.log(getJohnProfile().then((a)=>{console.log(a)}))
console.log("555")
console.log(getJohnProfile().then(console.log ))
getJohnProfile().then(aa)