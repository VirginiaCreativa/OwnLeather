import React from 'react';
import styled from 'styled-components';
import Variables from '../../styles/VariableStyled';

const Grid = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  h4 {
    margin-bottom: 0;
    color: ${Variables.grey2};
    font-weight: 300;
  }
`;

const Symbol = styled.div`
  margin-right: 10px;
  border-right: 1px solid rgba(0, 0, 0, 0.15);
  padding: 0 10px;
  font-size: 30px;
  i {
    color: ${Variables.grey2};
  }
`;

const Logo = () => {
  return (
    <Grid>
      <Symbol>
        <i className="bx bx-blanket" />
      </Symbol>
      <h4>OwnLeather</h4>
    </Grid>
  );
};

export default Logo;
