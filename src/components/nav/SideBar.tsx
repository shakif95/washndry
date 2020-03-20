import * as React from 'react';
import { Logo } from './Logo';

export const SideBar: React.FC<any> = props => {
  return (
    <>
      <div className="sidebar" data-color="red">
        <Logo />
        <div className="sidebar-wrapper" id="sidebar-wrapper">
          <ul className="nav">
            <li className="active ">
              <a href="./dashboard">
                <i className="now-ui-icons design_app"></i>
                <p>Dashboard</p>
              </a>
            </li>
            <li>
              <a href="/user-profile">
                <i className="now-ui-icons users_single-02"></i>
                <p>User Profile</p>
              </a>
            </li>
          </ul>
        </div>
      </div>

    </>
  )
}