import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Variables from '../../styles/VariableStyled';
import Logo from '../../common/Logo/Logo';

const Headign = styled.header`
  margin-bottom: ${({ hasheading }) => hasheading && '10px'};
  background-color: ${Variables.grey3};
  padding: ${({ hasheading }) => hasheading && '20px 10px'};
`;

const Header = () => {
  const location = useLocation();

  const [hasHome, setHasHome] = useState(false);

  const haveDatas = useSelector((state) => state.Userign.userDatas);

  useEffect(() => {
    if (location.pathname !== '/') setHasHome(true);
  }, [location]);

  return (
    <>
      {hasHome ? (
        <Headign hasheading={hasHome}>
          <div className="row">
            <div className="col">
              <Logo />
            </div>
            <div className="col">
              <div className="d-flex justify-content-end align-items-center">
                <p>User</p>
              </div>
            </div>
          </div>
        </Headign>
      ) : null}
    </>
  );
};

export default Header;
