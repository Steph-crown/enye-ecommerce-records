import axios from 'axios';

export function getDataRequest() {
    return axios.get('http://api.enye.tech/v1/challenge/records')
}
