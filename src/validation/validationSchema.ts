import * as Yup from "yup";
import YupPassword from "yup-password";

export const loginSchema = Yup.object().shape({
  username: Yup.string().required("Please provide a username"),
  password: Yup.string().required("Please provide a password"),
});

YupPassword(Yup);

export const signupSchema = Yup.object().shape({
  username: Yup.string().required("Please provide a username"),
  email: Yup.string()
    .email("Please provide a valid email address")
    .required("Please provide an email address"),
  password: Yup.string().password().required("Please provide a password"),
});
