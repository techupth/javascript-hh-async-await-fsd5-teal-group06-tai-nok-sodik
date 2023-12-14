// Exercise #4
/*{
  name: 'John',
  age: 20,
  hobbies: [ 'Coding', 'Football' ]
}
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
// Start coding here

console.log(await getJohnProfile())
