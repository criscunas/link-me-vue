import axios from "axios";
import Cookies from 'js-cookie';

export const HTTP = axios.create({
  baseURL: 'http://localhost:4040/',
  headers: {
    Authorization: 'Bearer ' + Cookies.get('auth')
  }
})

export const HTTPnoAuth = axios.create({
  baseURL: 'http://localhost:4040/',
  
})