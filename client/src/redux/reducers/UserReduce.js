import { FORM_USER_SIGN, USER_DATAS } from '../types';

const initialState = {
  shouldUser: false,
  userDatas: {},
};

const UserReduce = (state = initialState, action) => {
  switch (action.type) {
    case FORM_USER_SIGN:
      return {
        ...state,
        shouldUser: action.payload,
      };
    case USER_DATAS:
      return {
        ...state,
        userDatas: action.payload,
      };
    default:
      return state;
  }
};

export default UserReduce;
