import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5001/clone-edb04/us-central1/api',
});

//'http://localhost:5001/clone-edb04/us-central1/api',
//'https://us-central1-clone-edb04.cloudfunctions.net/api',
export default instance;
