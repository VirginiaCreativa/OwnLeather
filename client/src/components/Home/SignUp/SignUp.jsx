import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import {
  HeadeingForm,
  Line,
  Form,
  GroupForm,
  ButtonLink,
  GroupFromBack,
} from '../Home.Styled';

import { UserFormSign, UserDatas } from '../../../redux/actions/UserAction';

const SignUp = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [hasDatas, setDatas] = useState({
    inputNameFull: '',
    inputEmail: '',
    inputPassword: '',
  });

  const handleInputChange = (ev) => {
    setDatas({
      ...hasDatas,
      [ev.target.name]: ev.target.value,
    });
  };

  const handleSubmitSignUp = (ev) => {
    ev.preventDefault();
    const formDatas = {
      namefull: hasDatas.inputNameFull,
      email: hasDatas.inputEmail,
      password: hasDatas.inputPassword,
    };
    localStorage.setItem('formDatas', JSON.stringify(formDatas));
    dispatch(UserFormSign(true));
  };
  return (
    <>
      <HeadeingForm>
        <h1>Sign Up</h1>
        <Line />
      </HeadeingForm>
      <Form onSubmit={handleSubmitSignUp}>
        <GroupForm>
          <label htmlFor="InputNameFull">
            Full Name
            <input
              onChange={handleInputChange}
              type="text"
              name="inputNameFull"
            />
          </label>
        </GroupForm>
        <GroupForm>
          <label htmlFor="InputEmail">
            Email
            <input onChange={handleInputChange} type="text" name="inputEmail" />
          </label>
        </GroupForm>
        <GroupForm>
          <label htmlFor="InputPassword">
            Password
            <input
              onChange={handleInputChange}
              type="password"
              name="inputPassword"
            />
          </label>
        </GroupForm>
        <div className="d-grid gap-2" style={{ marginTop: '40px' }}>
          <button type="submit" className="btn btn-primary btn-lg">
            Sign Up
          </button>
        </div>
      </Form>
    </>
  );
};

export default SignUp;
