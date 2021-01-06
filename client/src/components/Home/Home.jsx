import React from 'react';
import { Gridolumn, Column, Heading, OverlyBg } from './Home.Styled';

const HomeComponent = () => {
  return (
    <>
      <Gridolumn>
        <Column>
          <Heading>
            <h1>Logo</h1>
            <h6>Welcome to our page</h6>
            <h3>
              Esse consectetur id exercitation amet. Adipisicing tempor aute
              culpa nisi mollit nostrud sit cupidatat minim irure.
            </h3>
            <p>
              Adipisicing laborum incididunt excepteur non culpa consequat in
              veniam et adipisicing nostrud. Nostrud voluptate incididunt .
            </p>
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
