import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import UserReduce from './UserReduce';

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    UserReduce,
  });

export default createRootReducer;
