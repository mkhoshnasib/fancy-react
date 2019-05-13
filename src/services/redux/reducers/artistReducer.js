import {GET_ARTIST} from '../actions/types';

const initialState = {
  items: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ARTIST: return {
      ...state,
      items: [action.payload],
    };
    default: return state;
  }
}