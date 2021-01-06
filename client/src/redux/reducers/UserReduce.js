import { FORM_USER_SIGN } from '../types';

const initialState = {
  shouldUser: true,
};

const UserReduce = (state = initialState, action) => {
  switch (action.type) {
    case FORM_USER_SIGN:
      return {
        ...state,
        shouldUser: action.payload,
      };

    default:
      return state;
  }
};

export default UserReduce;
