module.exports = (url) => fetch(url, {
      mode: "cors",
      headers: {
          "Access-Control-Allow-Origin": "*",
      },
  })
  .then((response) => response.json())
  