/* eslint-disable react-hooks/exhaustive-deps */
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
const NavUser = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: flex-end;
  p {
    margin-bottom: 0;
  }
`;

const Header = () => {
  const location = useLocation();

  const [hasHome, setHasHome] = useState(false);

  useEffect(() => {
    if (location.pathname !== '/') setHasHome(true);
  });

  return (
    <>
      {hasHome ? (
        <Headign hasheading={hasHome}>
          <div className="row">
            <div className="col">
              <Logo />
            </div>
            <div className="col">
              <NavUser>...</NavUser>
            </div>
          </div>
        </Headign>
      ) : null}
    </>
  );
};

export default Header;
