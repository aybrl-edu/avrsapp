import axios from 'axios';
import config from '../configs/config'

const parkingService = {
  getState() {
    return axios.get(
        `${config.apiUrl}/api/parking_state`,
        {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        }
    );
  },
};

export default parkingService;
