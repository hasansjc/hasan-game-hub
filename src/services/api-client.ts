import axios from "axios";

export default axios.create({
    baseURL : 'https://api.rawg.io/api',
    params: {
        key : '2b381955f2e04fb0b4b770e02d3a3062'
    }
})