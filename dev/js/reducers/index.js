import {combineReducers} from 'redux';
import UserReducer from './reducers-users';
import ActiveUseReducer from './reducer-active-user'


const allReducers = combineReducers({
  users: UserReducer,
  activeUser: ActiveUseReducer
});


export default allReducers;
