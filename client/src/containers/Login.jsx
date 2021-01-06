import React from 'react';

const Login = () => {
  console.log(localStorage.getItem('formDatas'));
  const { namefull, email, password } = JSON.parse(
    localStorage.getItem('formDatas'),
  );
  return (
    <>
      <h2>Login</h2>
      <h1>{namefull}</h1>
    </>
  );
};

export default Login;
