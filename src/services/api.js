import axios from 'axios';

const API = axios.create({
  baseURL: process.env.REACT_APP_API,
  headers: {
    // 'Authorization' : 'Basic Z3V5bWVsaG9ycXVlbmFydXRvOmF2bGlzb3hpZWxhbmltZGFtdGE=',
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export { API };