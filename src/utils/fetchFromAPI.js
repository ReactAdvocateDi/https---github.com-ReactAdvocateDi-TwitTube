import axios from 'axios';


const axios = require('axios');

const BASE_URL = 'https://youtube86.p.rapidapi.com/api/youtube';

const options = {
  method: 'POST',
  url: BASE_URL,
  headers: {
    'content-type': 'application/json',
    'X-Forwarded-For': '70.41.3.18',
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube86.p.rapidapi.com'
  },
  data: {
    url: 'https://www.youtube.com/watch?v=a9LDPn-MO4I'
  }
};

try {
  const response = await axios.request(options);
  console.log(response.data);
} catch (error) {
  console.error(error);
}
