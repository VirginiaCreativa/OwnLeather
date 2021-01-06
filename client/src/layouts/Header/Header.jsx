import React from 'react';
import { useLocation } from 'react-router-dom';
import Logo from '../../common/Logo/Logo';

const Header = () => {
  const location = useLocation();
  return <>{location.pathname !== '/' ? <Logo /> : null}</>;
};

export default Header;
