import * as React from 'react';
import { FaBiohazard } from 'react-icons/fa';

export const Logo: React.FC<any> = props => {
  return (
    <div className="logo">
      <a href="/dashboard" className="simple-text logo-mini">
        <FaBiohazard size="35"/>
      </a>
      <a href="/dashboard" className="simple-text logo-normal">
        Wash & Dry
      </a>
    </div>
  )
}