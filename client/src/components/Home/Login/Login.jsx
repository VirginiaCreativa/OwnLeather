import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation, Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  HeadeingForm,
  Line,
  Form,
  GroupForm,
  ValidationCheck,
  ValidationError,
} from '../Home.Styled';

import { UserFormSign } from '../../../redux/actions/UserAction';

const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [hasDatas, setDatas] = useState({
    inputNameFull: '',
    inputEmail: '',
    inputPassword: '',
  });
  const [onValidationEmail, setOnValidationEmail] = useState(true);
  const [isVAalidationEmail, setIsValidationEmail] = useState(false);
  const [onValidationPass, setOnValidationPass] = useState(true);
  const [isVAalidationPass, setIsValidationPass] = useState(false);

  const handleInputChange = (ev) => {
    setDatas({
      ...hasDatas,
      [ev.target.name]: ev.target.value,
    });
  };

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
        <GroupForm>
          <label htmlFor="InputEmail">
            Email
            <input onChange={handleInputChange} type="text" name="inputEmail" />
            {onValidationEmail && (
              <ValidationError>
                <i className="bx bx-x" />
              </ValidationError>
            )}
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
            {onValidationPass && (
              <ValidationCheck>
                <i className="bx bx-check" />
              </ValidationCheck>
            )}
          </label>
        </GroupForm>
        <div className="d-grid gap-2" style={{ marginTop: '40px' }}>
          <button type="submit" className="btn btn-primary btn-lg">
            Sign Up
          </button>
        </div>
        <button type="button" onClick={handleGoBack}>
          go back
        </button>
      </Form>
    </>
  );
};

export default Login;
