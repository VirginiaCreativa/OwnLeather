import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
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

  useEffect(() => {
    if (location.pathname !== '/') setHasHome(true);
  }, [location]);

  return <Headign hasheading={hasHome}>{hasHome ? <Logo /> : null}</Headign>;
};

export default Header;
