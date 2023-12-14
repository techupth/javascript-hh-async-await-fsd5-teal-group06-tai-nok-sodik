//Exercise #2
/*{
  errorCode: 500,
  message: '👿 Failed to request data from server'
}*/
let getJohnProfile = () => {
  return new Promise(function (_, reject) {
    setTimeout(
      () =>
        reject({
          errorCode: 500,
          message: "👿 Failed to request data from server",
        }),
      2000
    );
  });
};

// Start coding here
console.log(getJohnProfile().catch(console.log ))