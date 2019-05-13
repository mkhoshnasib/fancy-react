import {GET_ARTIST} from './types';
import {httpClient} from '../../http/http-client/http-client';

export const getArtist = () => (dispatch) => {
  httpClient.getCall('/artists/0oSGxfWSnnOXhD2fKuz2Gy').then(res => dispatch({type: GET_ARTIST, payload: res}));
};