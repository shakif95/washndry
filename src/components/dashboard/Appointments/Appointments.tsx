import * as React from 'react';
import { Dashboard } from '../Dashboard';
import { Row, Col, Card, Button } from 'react-bootstrap';

import './Appointments.css';
import '../common.css';
import { Link } from 'react-router-dom';

export const Appointments: React.FC<any> = props => {
  return (
    <Dashboard>
      <Row>
        <Col md={12}>
          <Card>
            <Card.Header>
              <Card.Title>
                MY APPOINTMENTS
                </Card.Title>
              <Card.Subtitle className="card-subtitles">
                This view is showing your scheduled appointments
                </Card.Subtitle>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col xs={12} md={6} lg={3}>
                  <Link to="/book-slot">
                    <Button variant="success">
                      Book Now
                    </Button>
                  </Link>
                </Col>
              </Row>
              <Row>
                <Col xs={12} md={6} lg={4}>
                  <Card className="appointment-card">
                    <Card.Header>
                      <Card.Title>
                        21st August, 2020
                        <p className="day">Friday</p>
                      </Card.Title>
                      <Card.Subtitle>
                        2.00PM - 2.45PM
                      </Card.Subtitle>
                    </Card.Header>
                    <Card.Body className="card-body-spacing">
                        <Button>
                          Change
                        </Button>
                        <Button variant="danger">
                          Cancel
                        </Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={12} md={6} lg={4}>
                  <Card className="appointment-card">
                    <Card.Header>
                      <Card.Title>
                        28th August, 2020
                        <p className="day">Friday</p>
                      </Card.Title>
                      <Card.Subtitle>
                        2.00PM - 2.45PM
                      </Card.Subtitle>
                    </Card.Header>
                    <Card.Body className="card-body-spacing">
                        <Button>
                          Change
                        </Button>
                        <Button variant="danger">
                          Cancel
                        </Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={12} md={6} lg={4}>
                  <Card className="appointment-card">
                    <Card.Header>
                      <Card.Title>
                        4th September, 2020
                        <p className="day">Friday</p>
                      </Card.Title>
                      <Card.Subtitle>
                        2.00PM - 2.45PM
                      </Card.Subtitle>
                    </Card.Header>
                    <Card.Body className="card-body-spacing">
                        <Button>
                          Change
                        </Button>
                        <Button variant="danger">
                          Cancel
                        </Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={12} md={6} lg={4}>
                  <Card className="appointment-card">
                    <Card.Header>
                      <Card.Title>
                        11th September, 2020
                        <p className="day">Friday</p>
                      </Card.Title>
                      <Card.Subtitle>
                        2.00PM - 2.45PM
                      </Card.Subtitle>
                    </Card.Header>
                    <Card.Body className="card-body-spacing">
                        <Button>
                          Change
                        </Button>
                        <Button variant="danger">
                          Cancel
                        </Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={12} md={6} lg={4}>
                  <Card className="appointment-card">
                    <Card.Header>
                      <Card.Title>
                        18th September, 2020
                        <p className="day">Friday</p>
                      </Card.Title>
                      <Card.Subtitle>
                        2.00PM - 2.45PM
                      </Card.Subtitle>
                    </Card.Header>
                    <Card.Body className="card-body-spacing">
                        <Button>
                          Change
                        </Button>
                        <Button variant="danger">
                          Cancel
                        </Button>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Dashboard>
  )
}