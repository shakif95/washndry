import * as React from 'react';
import { Container, Row, Col, Form as ReactForm, Button } from 'react-bootstrap';


export const SignIn: React.FC<any> = props => {
  return (
    <Container fluid>
      <Row className="align-items-center justify-content-center">
        <Col xs={12} md={3}>
          <h1 className="display-4 text-center mb-3 mt-5">Sign Up</h1>
          <h6 className="text-center">Free Sign Up</h6>
          <ReactForm>
            <ReactForm.Group>
              <ReactForm.Label>
                Email
              </ReactForm.Label>
              <ReactForm.Control
                type="text"
                placeholder="Enter Email"
              />
            </ReactForm.Group>
            <ReactForm.Group>
              <ReactForm.Label>
                Password
              </ReactForm.Label>
              <ReactForm.Control
                type="password"
                placeholder="Enter Password"
              />
            </ReactForm.Group>

            <a href="/dashboard">
              <div className="text-center">
                <Button
                  variant="primary"
                  block
                >
                  Sign In
            </Button>
              </div>
            </a>
          </ReactForm>
        </Col>
      </Row>
    </Container>
  )
};