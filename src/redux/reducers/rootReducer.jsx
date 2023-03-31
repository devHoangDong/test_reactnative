import { combineReducers } from 'redux';
import userSlice from '../slice/userSlice';

export default combineReducers({
    userData: userSlice,
});
