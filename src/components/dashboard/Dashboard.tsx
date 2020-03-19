import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { LeftNav } from '../nav/LeftNav';
import { TopNav } from '../nav/TopNav';

export interface DashboardProps {
  children?: React.Component;
}

export const Dashboard: React.FC<any> = props => {
  return (
    <Container fluid>
      <Row>
        <Col xs={12}>
          <TopNav />
          <div>
            {props.children}
          </div>
        </Col>
      </Row>
    </Container>
  )
}