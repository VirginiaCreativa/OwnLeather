import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';

import Logo from '../../common/Logo/Logo';
import {
  Gridolumn,
  Column,
  Heading,
  HeadeingForm,
  Line,
  Form,
  GroupForm,
} from './Home.Styled';

const HomeComponent = () => {
  const history = useHistory();

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

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const formDatas = {
      namefull: hasDatas.inputNameFull,
      email: hasDatas.inputEmail,
      password: hasDatas.inputPassword,
    };
    localStorage.setItem('formDatas', JSON.stringify(formDatas));
    console.log(localStorage.getItem('formDatas'));
    console.log(
      `enviando datos...${hasDatas.inputNameFull} ${hasDatas.inputEmail}`,
    );
    history.push('/login');
  };

  return (
    <>
      <Gridolumn>
        <Column>
          <Heading>
            <Logo />
            <h1>Esse consectetur id exercitation amet.</h1>
            <h5>
              Adipisicing laborum incididunt excepteur non culpa consequat.
            </h5>
          </Heading>
          <img
            src="https://image.freepik.com/free-vector/cartoon-man-sitting-home-with-laptop_74855-6963.jpg"
            alt="background leather"
          />
        </Column>
        <Column>
          <HeadeingForm>
            <h1>Sign Up</h1>
            <Line />
          </HeadeingForm>
          <Form onSubmit={handleSubmit}>
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
                <input
                  onChange={handleInputChange}
                  type="text"
                  name="inputEmail"
                />
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
        </Column>
      </Gridolumn>
    </>
  );
};

export default HomeComponent;
