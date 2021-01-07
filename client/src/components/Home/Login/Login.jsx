import React, { useState, useEffect } from 'react';
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
  ButtonLink,
  GroupFromBack,
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
  const [onValidationEmail, setOnValidationEmail] = useState(false);
  const [isValidationEmail, setIsValidationEmail] = useState('');
  const [onValidationPass, setOnValidationPass] = useState(false);
  const [isValidationPass, setIsValidationPass] = useState('');

  useEffect(() => {
    const getData = JSON.parse(localStorage.getItem('formDatas'));
    if (getData !== null) {
      const { email, password } = getData;
      setIsValidationEmail(email);
      setIsValidationPass(password);
    }
    document.getElementById('btnSubmit').disabled = true;
  }, []);

  const handleInputChange = (ev) => {
    setDatas({
      ...hasDatas,
      [ev.target.name]: ev.target.value,
    });

    if (ev.target.name === 'inputEmail') {
      if (ev.target.textLength >= 10) {
        if (ev.target.value === isValidationEmail) {
          setOnValidationEmail(true);
        }
      } else {
        setOnValidationEmail(false);
      }
    } else {
      document.getElementById('btnSubmit').disabled = true;
    }

    if (ev.target.name === 'inputPassword') {
      if (ev.target.textLength >= 3) {
        if (ev.target.value === isValidationPass) {
          setOnValidationPass(true);
          document.getElementById('btnSubmit').disabled = false;
        }
      } else {
        setOnValidationPass(false);
      }
    } else {
      document.getElementById('btnSubmit').disabled = true;
    }
  };

  const handleSubmitLogin = (ev) => {
    ev.preventDefault();
    const disableBtn = document.getElementById('btnSubmit').disabled;
    if (disableBtn === false) history.push('/user');
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
            {onValidationEmail ? (
              <ValidationCheck>
                <i className="bx bx-check" />
              </ValidationCheck>
            ) : (
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
            {onValidationPass ? (
              <ValidationCheck>
                <i className="bx bx-check" />
              </ValidationCheck>
            ) : (
              <ValidationError>
                <i className="bx bx-x" />
              </ValidationError>
            )}
          </label>
        </GroupForm>
        <div className="d-grid gap-2" style={{ marginTop: '40px' }}>
          <button
            type="submit"
            className="btn btn-primary btn-lg"
            id="btnSubmit">
            Sign Up
          </button>
        </div>
        <GroupFromBack>
          <p>Another account?</p>
          <ButtonLink type="button" onClick={handleGoBack}>
            Go back
          </ButtonLink>
        </GroupFromBack>
      </Form>
    </>
  );
};

export default Login;
