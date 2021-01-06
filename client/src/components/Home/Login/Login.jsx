import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation, Link } from 'react-router-dom';
import styled from 'styled-components';
import { HeadeingForm, Line, Form, GroupForm } from '../Home.Styled';

import { UserFormSign } from '../../../redux/actions/UserAction';

const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmitLogin = (ev) => {
    ev.preventDefault();
  };

  const handleGoBack = (ev) => {
    localStorage.removeItem('formDatas');
    dispatch(UserFormSign(false));
  };

  return (
    <>
      <HeadeingForm>
        <h1>Login</h1>
        <Line />
      </HeadeingForm>
      <Form onSubmit={handleSubmitLogin}>
        <button type="button" onClick={handleGoBack}>
          go back
        </button>
      </Form>
    </>
  );
};

export default Login;
