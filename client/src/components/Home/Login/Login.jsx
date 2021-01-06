import React from 'react';
import { useHistory, useLocation, Link } from 'react-router-dom';
import styled from 'styled-components';
import { HeadeingForm, Line, Form, GroupForm } from '../Home.Styled';

const Login = () => {
  const history = useHistory();

  const handleSubmitLogin = (ev) => {
    ev.preventDefault();
  };

  const handleGoBack = (ev) => {
    localStorage.removeItem('formDatas');
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
