import React from 'react';
import axios from 'axios';
import Heading from '../components/User/UserHeading';
import Title from '../components/User/UserTitle';
import ColumnList from '../components/User/UserList';

const User = () => {
  const user = 'VirginiaCreativa';
  const githubToken = 'e7f7780d48c90ef8df10e9b0d1e857a1d4e2fcb0';
  axios
    .get(`https://api.github.com/users/${user}/repos`, {
      headers: {
        Authorization: `Bearer ${githubToken}`,
      },
    })
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.error(err);
    });
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
