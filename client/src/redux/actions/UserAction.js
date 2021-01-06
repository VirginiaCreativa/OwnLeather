/* eslint-disable import/prefer-default-export */
import { FORM_USER_SIGN } from '../types';

export const UserFormSign = (payload) => ({
  type: FORM_USER_SIGN,
  payload,
});
