import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Header.css';

export const Header: React.FC<any> = props => {
  return (
    <Container fluid className="container-ext">
      <Row>
        <Col xs={6}>
          <a href="/dashboard">
            <div className="brand-logo">
              Wash&Dry
                </div>
          </a>
        </Col>
        <Col xs={6}>
          <Row>
          <Col xs={4}>
            <a href="/dashboard">
              <div className="">
                Home
            </div>
            </a>
          </Col>
          <Col xs={4}>
            <a href="/dashboard">
              <div className="">
                About
            </div>
            </a>
          </Col>
          <Col xs={4}>
            <a href="/dashboard">
              <div className="">
                Get Started
            </div>
            </a>
          </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
};