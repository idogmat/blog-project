import React, { useState } from "react";
import { useAllSelector, useAppDispatch } from "../../utils/hooks";
import { authStateSelector } from "../../store/selectors";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { FormikProps, useFormik } from "formik";
import {
  LoginContent,
  LoginForm,
  LoginOffer,
  LoginWrapper,
} from "../../ui/LoginForm";
import { Paper } from "../../ui/Paper";
import { Typography } from "../../ui/Typography";
import { Input } from "../../ui/Input";
import { Button } from "../../ui/Button";

import * as yup from "yup";
import { recoveryThunk } from "./thanks/recoveryThunk";

interface IRecovery {}
export const basicSchema = yup.object().shape({
  email: yup.string().email().required("Email must be a valid"),
});
export function hasError(form: FormikProps<any>, prop: string): boolean {
  return !!form.errors[prop] && !!form.touched[prop];
}
interface IForgotPwd {
  setSent: (v: boolean) => void;
}
export const ForgotPassword: React.FC<IForgotPwd> = ({ setSent }) => {
  const dispatch = useAppDispatch();

  const loginForm = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: basicSchema,
    onSubmit: (values: { email: string }) => {
      dispatch(recoveryThunk(values.email));
      setSent(true);
    },
  });

  // Utils
  const emailHasError = hasError.bind(null, loginForm);

  return (
    <LoginWrapper sx={{ margin: "auto" }}>
      <LoginContent>
        <Paper sx={{ padding: "35px" }}>
          <Typography
            variant={"title"}
            sx={{ textAlign: "center", marginBottom: "0.6rem" }}
          >
            Forgot Password
          </Typography>
          <LoginForm onSubmit={loginForm.handleSubmit}>
            <Input
              type={"text"}
              error={emailHasError("email")}
              label={emailHasError("email") ? loginForm.errors.email : "Email"}
              {...loginForm.getFieldProps("email")}
            ></Input>
            <Typography
              sx={{
                fontSize: "14px",
                color: "#797476",
                textAlign: "end",
                maxWidth: "300px",
              }}
            >
              The link has been sent by email. If you don’t receive an email,
              send link again
            </Typography>
            <Button
              type={"submit"}
              bColor={"#fff"}
              disabled={emailHasError("email")}
            >
              Resend verification link
            </Button>

            <LoginOffer>
              <Typography underline sx={{ fontSize: "14px" }}>
                <Link to={"/login"}>Back to Sign in</Link>
              </Typography>
            </LoginOffer>
          </LoginForm>
        </Paper>
      </LoginContent>
    </LoginWrapper>
  );
};
