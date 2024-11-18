import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '502e26f20f904ecbbf39a63a1f6d2d7b'
    }
})