export function fetchData(url) {
  const promise = new Promise((resolve, reject) => {
    // Read the JSON response from the file
    const json = require(`./response.json`);
    resolve(json);
  });

  return promise;
}
