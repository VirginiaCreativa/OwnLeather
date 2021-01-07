/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Variables from '../../styles/VariableStyled';
import Logo from '../../common/Logo/Logo';

const Headign = styled.header`
  margin-bottom: ${({ hasheading }) => hasheading && '10px'};
  border-bottom: 2px solid ${Variables.grey3};
  padding: ${({ hasheading }) => hasheading && '10px'};
`;
const NavUser = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: flex-end;
  padding: 0 20px;
  height: 100%;
  img {
    margin-left: 10px;
    border-radius: 100%;
    height: 30px;
  }
  p {
    margin-bottom: 0;
  }
  button {
    border: none;
    border-radius: 100%;
    background-color: ${Variables.grey3};
    padding: 5px;
    width: 32px;
    height: 32px;
    :hover {
      background-color: ${Variables.blueNight1};
      i {
        color: #fff;
      }
    }
    i {
      color: ${Variables.grey1};
      font-size: 16px;
    }
  }
`;

const Header = () => {
  const location = useLocation();
  const history = useHistory();
  const userDatas = useSelector((state) => state.Userign.userDatas);

  const [hasHome, setHasHome] = useState(false);

  useEffect(() => {
    if (location.pathname !== '/') setHasHome(true);
  });

  const handleBtnLogOut = () => {
    history.push('/');
  };

  return (
    <>
      {hasHome ? (
        <Headign hasheading={hasHome}>
          <div className="row">
            <div className="col">
              <Logo />
            </div>
            <div className="col">
              <NavUser>
                <button type="button" onClick={handleBtnLogOut}>
                  <i className="bx bx-log-out-circle" />
                </button>
                <img
                  src="https://picsum.photos/100"
                  alt=""
                  className="ProfileAvatar"
                />
              </NavUser>
            </div>
          </div>
        </Headign>
      ) : null}
    </>
  );
};

export default Header;
