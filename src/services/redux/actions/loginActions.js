import {LOGIN} from './types';

export const login = () => (dispatch) => {
  const developerAccount = {
    clientId: '2db6ed818c29478f983950c342e37f0c',
    clientSecret: '2818d384a08d407393985791eccc5897',
  };
  fetch('/api/token', {
    method: 'POST',
    headers: {
      Authorization: 'Basic ' + (new Buffer(`${developerAccount.clientId}:${developerAccount.clientSecret}`).toString('base64')),
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: 'grant_type=client_credentials',
  }).then(res => res.json())
    .then(res => dispatch({type: LOGIN, payload: res.access_token}));
};