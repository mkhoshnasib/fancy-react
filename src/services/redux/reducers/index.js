import {combineReducers} from 'redux';
import loginReducer from './loginReducer';
import artistReducer from './artistReducer';

export default combineReducers({
  login: loginReducer,
  artist: artistReducer,
});