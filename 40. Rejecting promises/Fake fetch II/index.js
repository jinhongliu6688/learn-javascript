const fakeFetch = endpoint => {
    // TODO: implement fake fetch
  return new Promise((resolve, reject) => {
    if (endpoint === "flight-status") {
      resolve({
        departed: false,
        delayed: true
      })
    } else {
      reject("endpoint not supported.")
    }
  })
}

// Sample usage - do not modify
fakeFetch("flight-status")
  .then((data) => {
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });

fakeFetch("user-details")
  .then((data) => {
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });
