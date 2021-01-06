import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { HeadeingForm, Line, Form, GroupForm } from '../Home.Styled';

const SignUp = () => {
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
  const history = useHistory();

  const handleSubmitSignUp = (ev) => {
    ev.preventDefault();
    const formDatas = {
      namefull: hasDatas.inputNameFull,
      email: hasDatas.inputEmail,
      password: hasDatas.inputPassword,
    };
    localStorage.setItem('formDatas', JSON.stringify(formDatas));
    console.log(localStorage.getItem('formDatas'));
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
            NameFull
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
        <p>
          Already have an account? <Link to="/login">Sign In</Link>
        </p>
      </Form>
    </>
  );
};

export default SignUp;
