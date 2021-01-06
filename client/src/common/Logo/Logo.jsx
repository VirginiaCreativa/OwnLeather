import React from 'react';
import styled from 'styled-components';
import Variables from '../../styles/VariableStyled';

const Grid = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  h5 {
    margin-bottom: 0;
    color: ${Variables.black2};
  }
`;

const Symbol = styled.div`
  margin-right: 10px;
  border-right: 1px solid ${Variables.grey1};
  padding: 0 10px;
  font-size: 30px;
  i {
    color: ${Variables.black2};
  }
`;

const Logo = () => {
  return (
    <Grid>
      <Symbol>
        <i className="bx bx-blanket" />
      </Symbol>
      <h5>OwnLeather</h5>
    </Grid>
  );
};

export default Logo;
