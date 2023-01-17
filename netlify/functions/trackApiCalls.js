const axios = require("axios");

exports.handler = async function (event, context) {
    const {trackId} = event.queryStringParameters

    const options = {
      method: 'GET',
      url: 'https://spotify23.p.rapidapi.com/tracks/',
      params: {ids: trackId},
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
        'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
      }
    };
    console.log(event);
    console.log(context);
    try {
      const response = await axios.request(options);
      const data = await response.data
      return {
        statusCode: 200,
        body: JSON.stringify({ data }),
      };
    } catch (err) {
      return {
        statusCode: 404,
        body: err.toString(),
      };
    }
  };