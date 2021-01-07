import React from 'react';
import axios from 'axios';
import Heading from '../components/User/UserHeading';
import Title from '../components/User/UserTitle';
import ColumnList from '../components/User/UserList';

const User = () => {
  const user = 'VirginiaCreativa';
  const githubToken = 'b81c1ad7c7c90de64cefbd0df4711e3f309c2166';
  axios({
    method: 'get',
    url: `https://api.github.com/users/${user}/repos`,
    headers: {
      Authorization: `Bearer ${githubToken}`,
      'Content-Type': 'application/json',
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
