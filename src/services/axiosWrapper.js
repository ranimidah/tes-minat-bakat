/**
 * Axios Request Wrapper
 * ---------------------
 *
 * @author  Sheharyar Naseer (@sheharyarn)
 * @license MIT
 *
 */

import axios from 'axios';
import { API_URL } from '../config/static';

/**
 * Request Wrapper with default success/error actions
 */
const request = options => {
  /**
   * Create an Axios Client with defaults
   */
  const requestHeaders = options.customHeaders || {
    // 'Content-Type': 'multipart/form-data',
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'cache-control': 'no-cache',
  };

  const client = axios.create({
    baseURL: options.MAIN_URL || API_URL,
    headers: {...requestHeaders},
  });

  const onSuccess = response => {
    // console.log('Data', response);
    return response.data;
  };

  const onError = error => {
    // console.log('Data Error', error.response);
    if (error.response) {
      if (options.handles && error.response.status) {
        if (options.handles.includes(error.response.status)) {
          return Promise.reject(error.response);
        }
      }
      if (error.response.status === 422) {
        // handle 422
      }
    } else {
      // Something else happened while setting up the request
      // triggered the error
      console.log('Error Message:', error);
    }

    return Promise.reject(error.response || error.message);
  };

  return client(options).then(onSuccess).catch(onError);
};

export default request;
