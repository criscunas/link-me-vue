import axios from "axios";
import Cookies from 'js-cookie';

const token = Cookies.get('auth');

export const HTTP = axios.create({
  baseURL: 'http://localhost:4040/',
  headers: {
    Authorization: 'Bearer ' + token
  }
})