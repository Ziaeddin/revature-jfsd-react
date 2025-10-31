import axios from 'axios';

const externalApiService = axios.create({
    headers: {
        'Content-Type': 'application/json'
    }
});

export default externalApiService;
