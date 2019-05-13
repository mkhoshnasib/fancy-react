import request from '../http-interceptor/http-interceptor';
import {store} from '../../redux/store';

const options = {headers: {Authorization: 'Bearer ' + store.getState().login.accessToken}};

const getCall = (url) => request({url, method: 'GET', options});

const postCall = (url, body) => request({url, method: 'POST', body, options});

export const httpClient = { getCall, postCall };
