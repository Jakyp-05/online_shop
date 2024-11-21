import * as yup from "yup";

export const schemaRegister = yup.object().shape({
  username: yup.string().required("Please Enter a username"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Mail is required")
    .matches(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    ),
  password: yup
    .string()
    .required("Please Enter your password")
    .min(6, "Password must be at least 6 characters"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), undefined], "Passwords must match")
    .required("Please confirm your password"),
});

export const schemaLogin = yup.object().shape({
  username: yup.string().required("Please Enter a username"),
  password: yup
    .string()
    .required("Please Enter your password")
    .min(6, "Password must be at least 6 characters"),
});
