import axios from "axios";

const api = axios.create({
    baseURL: 'http://crudforms.sunsalesystem.com.br/PHP'
})

export default api;