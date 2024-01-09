// // netlify/functions/proxy.js
// const axios = require('axios');

// exports.handler = async function (event, context) {
//   const apiUrl = "http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10";

//   try {
//     const response = await axios.get(apiUrl);
//     return {
//       statusCode: 200,
//       body: JSON.stringify(response.data),
//     };
//   } catch (error) {
//     console.error("Failed", error);
//     return {
//       statusCode: 500,
//       body: JSON.stringify({ error: "Internal Server Error" }),
//     };
//   }
// };
