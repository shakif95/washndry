import * as React from 'react';
import { MdLocalLaundryService } from 'react-icons/md';

export const Logo: React.FC<any> = props => {
  return (
    <div className="logo">
      <a href="/dashboard" className="simple-text logo-mini">
        <MdLocalLaundryService size="35"/>
      </a>
      <a href="/dashboard" className="simple-text logo-normal">
        Wash & Dry
      </a>
    </div>
  )
}