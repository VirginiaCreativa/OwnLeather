import { FORM_USER_SIGN } from '../types';

const initialState = {
  hasUser: '',
};

const UserReduce = (state = initialState, action) => {
  switch (action.type) {
    case FORM_USER_SIGN:
      return {
        ...state,
        hasUser: action.payload,
      };

    default:
      return state;
  }
};

export default UserReduce;
