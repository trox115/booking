import axios from 'axios';

const baseUrl = 'http://localhost:3001/barbers';

export function getBarbers() {
  return axios
    .get(baseUrl, { withCredentials: true })
    .then(response => response.data)
    .catch(erro => erro);
}

export function d() {}
