import React, { useState } from 'react';
import { useHistory, useLocation, Link } from 'react-router-dom';
import SignUp from './SignUp/SignUp';
import Login from './Login/Login';
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
  const [isUserStorage, setUserStorage] = useState(false);

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
        {/* COVER PAGE  */}
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
        {/* FORM SIGN UP OR LOGIN */}
        <Column>{isUserStorage ? <Login /> : <SignUp />}</Column>
      </Gridolumn>
    </>
  );
};

export default HomeComponent;
