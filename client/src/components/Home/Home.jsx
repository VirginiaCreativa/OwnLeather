import React from 'react';
import { Link } from 'react-router-dom';
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
          <Form>
            <GroupForm>
              <label htmlFor="InputNameFull">
                NameFull
                <input type="text" />
              </label>
            </GroupForm>
            <GroupForm>
              <label htmlFor="InputNameFull">
                Email
                <input type="text" />
              </label>
            </GroupForm>
            <GroupForm>
              <label htmlFor="InputNameFull">
                Password
                <input type="password" />
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
