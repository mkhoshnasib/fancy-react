import {LOGIN} from '../actions/types';

const initialState = {
  accessToken: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN: return {
      ...state,
      accessToken: action.payload,
    };
    default: return state;
  }
}