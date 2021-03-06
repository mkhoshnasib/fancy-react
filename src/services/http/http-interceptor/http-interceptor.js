import axios from 'axios';

/** creates an http client using axios library
 *  for more information about axios click on the below link:
 *  https://github.com/axios/axios */
const client = axios.create({
    baseURL: `/v1`,
});

/** creates http request using given options and handles response */
const request = (options) => {
  const onSuccess = response => response;
  const onError = error => Promise.reject(error);
  return client(options)
    .then(onSuccess)
    .catch(onError);
};

export default request;
