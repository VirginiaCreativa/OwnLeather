import React from 'react';
import Logo from '../../common/Logo/Logo';
import { Gridolumn, Column, Heading, OverlyBg } from './Home.Styled';

const HomeComponent = () => {
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
        <Column>Colunm 2</Column>
      </Gridolumn>
    </>
  );
};

export default HomeComponent;
