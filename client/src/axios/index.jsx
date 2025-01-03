import axios from 'axios';
import Cookies from 'js-cookie';

const fetchData = async (url, method = 'GET', data = null, additionalHeaders = {}) => {
  const token = Cookies.get('token');

  try {
    const response = await axios({
      url,
      method,
      data,
      headers: {
        Authorization: token ? `Bearer ${token}` : '',
        ...additionalHeaders,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default fetchData;
