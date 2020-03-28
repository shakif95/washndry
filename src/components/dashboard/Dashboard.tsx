import * as React from 'react';
import { SideBar } from '../nav/SideBar';
import { NavBar } from '../nav/NavBar';
import { Row, Col, Card } from 'react-bootstrap';
import { FaHistory, FaCalendarDay, FaClock } from 'react-icons/fa';

import './Dashboard.css';
import { Link } from 'react-router-dom';

export interface DashboardProps {
  children?: React.Component;
}

export const Dashboard: React.FC<any> = ({ children }) => {
  return (
    <div className="wrapper">
      <SideBar />
      <div className="main-panel" id="main-panel">
        <NavBar />
        <div className="content">
          <Row>
            <Col md={4}>
              <Link to="/history" className="no-underline">
                <Card className="card-stats">
                  <Card.Body>
                    <Row>
                      <Col xs={5} md={4}>
                        <div className="icon-big text-center icon-warning">
                          <FaHistory className="text-warning" />
                        </div>
                      </Col>
                      <Col xs={7} md={8}>
                        <div className="numbers">
                          <p className="card-category">History</p>
                          <p className="card-title">5 visits</p>
                        </div>
                      </Col>
                    </Row>
                  </Card.Body>
                  <Card.Footer>
                    <hr />
                    <div className="stats">
                      Show History
                  </div>
                  </Card.Footer>
                </Card>
              </Link>
            </Col>
            <Col md={4}>
              <Link to="/book-slot" className="no-underline">
                <Card className="card-stats">
                  <Card.Body>
                    <Row>
                      <Col xs={5} md={4}>
                        <div className="icon-big text-center icon-warning">
                          <FaCalendarDay className="text-success" />
                        </div>
                      </Col>
                      <Col xs={7} md={8}>
                        <div className="numbers">
                          <p className="card-category">Free Slots</p>
                          <p className="card-title">Only 3 left</p>
                        </div>
                      </Col>
                    </Row>
                  </Card.Body>
                  <Card.Footer>
                    <hr />
                    <div className="stats">
                      Book Now
                  </div>
                  </Card.Footer>
                </Card>
              </Link>
            </Col>
            <Col md={4}>
              <Link to="/appointments" className="no-underline">
                <Card className="card-stats">
                  <Card.Body>
                    <Row>
                      <Col xs={5} md={4}>
                        <div className="icon-big text-center icon-warning">
                          <FaClock className="text-danger" />
                        </div>
                      </Col>
                      <Col xs={7} md={8}>
                        <div className="numbers">
                          <p className="card-category">Appointments</p>
                          <p className="card-title">05</p>
                        </div>
                      </Col>
                    </Row>
                  </Card.Body>
                  <Card.Footer>
                    <hr />
                    <div className="stats">
                      My Appointments
                    </div>
                  </Card.Footer>
                </Card>
              </Link>
            </Col>
          </Row>
          {children}
        </div>
      </div>
    </div>

  )
}