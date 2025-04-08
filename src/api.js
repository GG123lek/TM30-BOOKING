
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://home4u-3.onrender.com',
  headers: {
    'Content-Type': 'application/json',
   
  },
  
});

export default api;
