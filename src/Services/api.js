import axios from "axios";
import Config from './../config.json';

const api = axios.create({
    baseURL: 'https://apisunsale.azurewebsites.net/api'
})

const token = localStorage.getItem(Config.TOKEN);

if (token) {
  api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

export default api;
