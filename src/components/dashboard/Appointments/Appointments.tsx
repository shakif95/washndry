import * as React from 'react';
import { Dashboard } from '../Dashboard';
import { Row, Col, Card, Button } from 'react-bootstrap';

import './Appointments.css';

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
                  <Button>
                    Book Now
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Dashboard>
  )
}