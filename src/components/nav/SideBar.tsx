import * as React from 'react';
import { Logo } from './Logo';
import { Link } from 'react-router-dom';

export const SideBar: React.FC<any> = props => {
  return (
    <>
      <div className="sidebar" data-color="red">
        <Logo />
        <div className="sidebar-wrapper" id="sidebar-wrapper">
          <ul className="nav">
            <li className="active ">
              <Link to="./dashboard">
                <i className="now-ui-icons design_app"></i>
                <p>Dashboard</p>
              </Link>
            </li>
            <li>
              <Link to="/user-profile">
                <i className="now-ui-icons users_single-02"></i>
                <p>User Profile</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>

    </>
  )
}