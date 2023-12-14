// Exercise #5
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
async function asynchonous() {
  try {
    let jhonProfile = await getJohnProfile();
    console.log(jhonProfile);
  } catch (error) {
    console.log(error);
  }
}
asynchonous();
