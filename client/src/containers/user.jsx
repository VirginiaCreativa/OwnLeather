import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { gapi } from 'gapi-script';
import moment from 'moment';
import {
  userGithub,
  userGmail,
  tokenGithub,
  tokenGmail,
  clientIDGmail,
} from '../config/Token/Token';
import Heading from '../components/User/UserHeading';
import Title from '../components/User/UserTitle';
import Column from '../components/User/UserColumn';
import Lists from '../components/User/UserLists';

const User = () => {
  const [dataGithub, setDataGithub] = useState([]);
  const [dataGmailCalendar, setDataGmailCalendar] = useState([]);

  // const getCalendarGmail = () => {
  //   function start() {
  //     gapi.client
  //       .init({
  //         apiKey: tokenGmail,
  //         clientId: clientIDGmail,
  //       })
  //       .then(() => {
  //         return gapi.client.request({
  //           path: `https://www.googleapis.com/calendar/v3/calendars/${clientIDGmail}/events`,
  //         });
  //       })
  //       .then((response) => {
  //         console.log(response.result);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }
  //   gapi.load('client', start);
  // };

  useEffect(() => {
    // getCalendarGmail();
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
  }, []);

  return (
    <div className="container">
      <Heading />
      <Title />
      <div className="row">
        <div className="col">
          <Column icon="bxl-github" title="Repositories" user={userGithub}>
            <Lists items={dataGithub} />
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
