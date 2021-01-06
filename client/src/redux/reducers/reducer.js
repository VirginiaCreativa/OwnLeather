import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import Userign from './UserReduce';

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    Userign,
  });

export default createRootReducer;
