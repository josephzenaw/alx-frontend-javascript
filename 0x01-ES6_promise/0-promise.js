function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Simulate an API call
    setTimeout(() => {
      const success = true; // This would be determined by your API response

      if (success) {
        resolve("API call successful!");
      } else {
        reject("API call failed.");
      }
    }, 1000); // Simulate a 1-second delay for the API call
  });
}

export default getResponseFromAPI;

