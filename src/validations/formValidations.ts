import * as Yup from 'yup';

export const SignInValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid Email Format')
    .required('Required'),
  password: Yup.string()
    .min(6, 'Too Short')
    .max(20, 'Too Long')
    .required('Required'),
});