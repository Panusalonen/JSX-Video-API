import axios from 'axios';

const KEY = 'AIzaSyBxVSn__o5LkUlng27qs6j16QhxLKUljpU';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: `${KEY}`
    }
});