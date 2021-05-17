import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../Button/Button';
import './FeedActionbar.scss';

type FeedActionbarProps = {};

function FeedActionbar() {
  return (
    <div className="FeedActionbar-container">
      <ul>
        <li className="active">
          <NavLink to="/">오름차순</NavLink>
        </li>
        <li>
          <NavLink to="/">내림차순</NavLink>
        </li>
      </ul>
      <div>
        <Button>필터</Button>
      </div>
    </div>
  );
}

export default FeedActionbar;
