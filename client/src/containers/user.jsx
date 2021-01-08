import React, { useState } from 'react';
import axios from 'axios';
import moduleName from 'module';
import Heading from '../components/User/UserHeading';
import Title from '../components/User/UserTitle';
import Column from '../components/User/UserColumn';
import Ul from '../components/User/UserLists';

const User = () => {
  const [dataGithub, setDataGithub] = useState([]);
  const userGithub = 'VirginiaCreativa';
  const userGmail = 'virginiavelasquez16@gmail.com';
  const githubToken = '7a29e6e3a6a1fa6a8ed5b7c576940c136355efe1';
  axios
    .get(`https://api.github.com/users/${userGithub}/repos`, {
      headers: {
        Authorization: `Bearer ${githubToken}`,
        'Content-Type': 'application/json',
      },
    })
    .then((res) => {
      setDataGithub(res.data);
    })
    .catch((err) => {
      console.log(err);
    });

  return (
    <div className="container">
      <Heading />
      <Title />
      <div className="row">
        <div className="col">
          <Column icon="bxl-github" title="Repositories" user={userGithub}>
            <Ul>
              {dataGithub &&
                dataGithub.map((item, index) => (
                  <li key={index}>{item.name}</li>
                ))}
            </Ul>
          </Column>
        </div>
        <div className="col">
          <Column icon="bx-calendar" title="Google Calendar" user={userGmail}>
            Colummn2
          </Column>
        </div>
      </div>
    </div>
  );
};

export default User;
