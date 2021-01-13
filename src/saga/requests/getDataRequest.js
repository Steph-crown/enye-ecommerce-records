import axios from 'axios';

export function getDataRequest() {
    return axios.get('https://api.enye.tech/v1/challenge/records')
}
