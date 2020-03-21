import * as React from 'react';
import { Dashboard } from '../Dashboard';
import { Container, Row, Col, Card } from 'react-bootstrap';

import './Appointments.css';

export const Appointments: React.FC<any> = props => {
  return (
    <Dashboard>
      <Container fluid>
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
            </Card>
          </Col>
        </Row>
      </Container>
    </Dashboard>
  )
}