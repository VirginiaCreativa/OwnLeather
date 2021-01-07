/* eslint-disable import/prefer-default-export */
import { FORM_USER_SIGN, USER_DATAS } from '../types';

export const UserFormSign = (payload) => ({
  type: FORM_USER_SIGN,
  payload,
});

export const UserDatas = (payload) => ({
  type: USER_DATAS,
  payload,
});
