import axios from 'axios';

const KEY = 'AIzaSyCatfPAKlyU8Mqh4UhhTE0lB1jjrDzPdJA';

export default axios.create(
    {
        baseURL: 'https://www.googleapis.com/youtube/v3',
        params: {
            part: 'snippet',
            maxResult: 10,
            key: KEY
        }
    }
);
