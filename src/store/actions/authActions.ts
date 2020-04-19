import { SignInFormValues, SignInProps } from '../../components/auth/SignIn';
import { FormikBag } from 'formik';

export const loginSuccessAction = (
  values: SignInFormValues,
  { props }: FormikBag<SignInProps, SignInFormValues>
) => {
  props.navigateToDashboard();
}