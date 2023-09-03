import { combineReducers } from 'redux';
import modalReducer from './modal';
import chatReducer from './chat';

const rootReducer = combineReducers({ modalReducer, chatReducer });

export default rootReducer;