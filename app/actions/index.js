import axios from 'axios';

export const LOCAL = true;
export const ROOT_URL = LOCAL ? 'http://localhost:3000/api' : 'TODO';

const helloWorld = () => {
  return axios.get(`${ROOT_URL}/`);
};

export default {
  helloWorld,
};
