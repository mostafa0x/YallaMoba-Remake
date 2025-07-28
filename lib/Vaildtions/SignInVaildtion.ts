import * as yup from "yup";

export const SignInVaildion = yup.object().shape({
  identifier: yup.string().min(6, "is Short").required("Required"),
  password: yup.string().min(8, "is Short").required("Required"),
});
