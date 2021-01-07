import React from 'react';
import Heading from '../components/User/UserHeading';
import Title from '../components/User/UserTitle';
import ColumnList from '../components/User/UserList';

const User = () => {
  return (
    <div className="container">
      <Heading />
      <Title />
      <div className="row">
        <div className="col">
          <ColumnList icon="bxl-github" title="Repositories">
            Colummn1
          </ColumnList>
        </div>
        <div className="col">
          <ColumnList icon="bx-calendar" title="Google Calendar">
            Colummn2
          </ColumnList>
        </div>
      </div>
    </div>
  );
};

export default User;
