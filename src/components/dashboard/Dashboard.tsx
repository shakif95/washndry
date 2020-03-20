import * as React from 'react';
import { SideBar } from '../nav/SideBar';

export interface DashboardProps {
  children?: React.Component;
}

export const Dashboard: React.FC<any> = props => {
  return (
    <div className="wrapper">
      <SideBar />
    </div>
  )
}