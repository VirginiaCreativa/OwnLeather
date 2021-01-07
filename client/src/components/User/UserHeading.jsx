import React from 'react';
import { useSelector } from 'react-redux';

const UserHeading = () => {
  const userDatas = useSelector((state) => state.Userign.userDatas);
  return (
    <>
      <h1>{userDatas.namefull}</h1>
    </>
  );
};

export default UserHeading;
