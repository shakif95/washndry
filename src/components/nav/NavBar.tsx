import * as React from 'react';
import { Container } from 'react-bootstrap';
export const NavBar: React.FC<any> = props => {
  return (
    <nav className="navbar navbar-expand-lg navbar-transparent  bg-primary  navbar-absolute">
      <Container fluid>
        <div className="navbar-wrapper">
          <div className="navbar-toggle">
            <button type="button" className="navbar-toggler">
              <span className="navbar-toggler-bar bar1"></span>
              <span className="navbar-toggler-bar bar2"></span>
              <span className="navbar-toggler-bar bar3"></span>
            </button>
          </div>
          <a className="navbar-brand" href="#pablo">Dashboard</a>
        </div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-bar navbar-kebab"></span>
          <span className="navbar-toggler-bar navbar-kebab"></span>
          <span className="navbar-toggler-bar navbar-kebab"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navigation">
          <ul className="navbar-nav">
            <li className="nav-item btn-rotate dropdown">
              <a className="nav-link dropdown-toggle" href="/dashboard" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="nc-icon nc-single-02"></i>
                <p>
                  <span className="d-lg-none d-md-block">Some Actions</span>
                </p>
              </a>
              <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                <a className="dropdown-item" href="/action">Action</a>
                <a className="dropdown-item" href="/action2">Another action</a>
                <a className="dropdown-item" href="/action3">Something else here</a>
              </div>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  )
}