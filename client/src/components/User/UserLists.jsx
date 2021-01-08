import React from 'react';
import moment from 'moment';
import styled from 'styled-components';
import Variables from '../../styles/VariableStyled';

const Ul = styled.ul`
  margin: 0;
  margin-bottom: 0;
  padding: 0;
  li {
    margin-bottom: 10px;
    border-bottom: 1px solid #fff;
    padding-bottom: 10px;
    list-style: none;
    :last-child {
      border-bottom: none;
    }
    p {
      margin-bottom: 0;
      font-size: 1.05rem;
      font-weight: 500;
    }
    span {
      font-size: 0.8rem;
      :last-child {
        color: ${Variables.grey2};
        font-size: 0.7rem;
        i {
          position: relative;
          top: 1px;
          margin-left: 6px;
          color: rgba(0, 0, 0, 0.2);
        }
      }
    }
  }
`;

const UserLists = ({ items }) => {
  return (
    <Ul>
      {items &&
        items.map((item, index) => (
          <li key={index}>
            <p>{item.name}</p>
            <div className="d-flex justify-content-between">
              <span>{item.description}</span>
              <span>
                {moment(item.created_at).format('MMMM Do YYYY, h:mm:ss a')}
                <i className="bx bx-time-five" />
              </span>
            </div>
          </li>
        ))}
    </Ul>
  );
};

export default UserLists;
