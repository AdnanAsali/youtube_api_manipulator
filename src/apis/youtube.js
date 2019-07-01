import axios from 'axios';

const KEY = '[your-youtube-api]';

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
