import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { userGithub, userGmail, tokenGithub } from '../config/Token/Token';
import Heading from '../components/User/UserHeading';
import Title from '../components/User/UserTitle';
import Column from '../components/User/UserColumn';
import Ul from '../components/User/UserLists';

const User = () => {
  const [dataGithub, setDataGithub] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${userGithub}/repos`, {
        headers: {
          Authorization: `Bearer ${tokenGithub}`,
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        setDataGithub(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    console.log(dataGithub);
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
                  <li key={index}>
                    <p>{item.name}</p>
                    <span>{item.description}</span>
                  </li>
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
