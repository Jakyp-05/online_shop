import * as yup from "yup";

export const schema = yup.object().shape({
  username: yup.string().required("Please Enter a username"),
  password: yup
    .string()
    .required("Please Enter your password")
    .min(6, "Password must be at least 6 characters"),
});
