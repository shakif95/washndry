import * as React from 'react';
import { Container, Row, Col, Form as ReactForm, Button } from 'react-bootstrap';
import { Form, FormikProps, withFormik } from 'formik';
import { connect, ResolveThunks } from 'react-redux';
import { loginSuccess } from '../../store/slices/authSlice';
import { loginSuccessAction } from '../../store/actions/authActions';
import { SignInValidationSchema } from '../../validations/formValidations';
import { push } from 'connected-react-router';


// const handleSubmit = () => {
//   loginSuccess();
// }

export interface SignInFormValues {
  email: string;
  password: string;
}

export const SignInComponent: React.FC<SignInProps & FormikProps<SignInFormValues>> = ({
  values,
  isSubmitting,
  handleChange
}) => {
  return (
    <Container fluid>
      <Row className="align-items-center justify-content-center">
        <Col xs={12} md={3}>
          <h1 className="display-4 text-center mb-3 mt-5">Sign Up</h1>
          <h6 className="text-center">Free Sign Up</h6>
          <Form noValidate>
              <ReactForm.Group>
                <ReactForm.Label>
                  Email
                </ReactForm.Label>
                <ReactForm.Control
                  type="text"
                  placeholder="Enter Email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                />
              </ReactForm.Group>
              <ReactForm.Group>
                <ReactForm.Label>
                  Password
                </ReactForm.Label>
                <ReactForm.Control
                  type="password"
                  placeholder="Enter Password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                />
              </ReactForm.Group>

                <div className="text-center">
                  <Button
                    type="submit"
                    variant="primary"
                    block
                  >
                    Sign In
              </Button>
                </div>
          </Form>
        </Col>
      </Row>
    </Container>
  )
};

const mapDispatchToProps = {
  loginSuccess: loginSuccess,
  navigateToDashboard: () => push('/dashboard')
}

const mapPropsToValues = () => ({
  email: '',
  password: '',
});

export type SignInProps = ResolveThunks<typeof mapDispatchToProps>;

export const SignIn = connect(
  null,
  mapDispatchToProps
)(
  withFormik({
    validationSchema: SignInValidationSchema,
    mapPropsToValues,
    handleSubmit: loginSuccessAction
  })(SignInComponent)
);