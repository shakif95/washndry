import * as React from 'react';

export const Logo: React.FC<any> = props => {
  return (
    <div className="logo">
      <a href="http://www.creative-tim.com" className="simple-text logo-mini">
        CT
      </a>
      <a href="http://www.creative-tim.com" className="simple-text logo-normal">
        Creative Tim
        </a>
    </div>
  )
}