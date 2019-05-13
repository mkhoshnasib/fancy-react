import request from '../http-interceptor/http-interceptor';

const getCall = (url, options) => request({ url, method: 'GET', options });

const postCall = (url, body, options) => request({ url, method: 'POST' , body, options});

export const httpClient = { getCall, postCall };
