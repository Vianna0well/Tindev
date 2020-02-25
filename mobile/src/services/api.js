import Axios from 'axios';

const api = Axios.create({
    baseURL: 'http://192.168.1.50:3001'
});

export default api