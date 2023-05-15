import axios from "axios";

const api = axios.create({
  baseURL: 'https://rogers-deploy-api.onrender.com'
})

export default api