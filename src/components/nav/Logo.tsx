import * as React from 'react';
import { MdLocalLaundryService } from 'react-icons/md';
import { Link } from 'react-router-dom';


export const Logo: React.FC<any> = props => {
  return (
    <div className="logo">
      <Link to="/dashboard" className="simple-text logo-mini">
        <MdLocalLaundryService size="35"/>
      </Link>
      <Link to="/dashboard" className="simple-text logo-normal">
        Wash & Dry
      </Link>
    </div>
  )
}