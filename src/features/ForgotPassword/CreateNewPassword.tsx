import React from "react";
import { useAppDispatch } from "../../utils/hooks";
import { Navigate } from "react-router-dom";
import { FormikProps, useFormik } from "formik";
import { LoginContent, LoginForm, LoginWrapper } from "../../ui/LoginForm";
import { Paper } from "../../ui/Paper";
import { Typography } from "../../ui/Typography";
import { Input } from "../../ui/Input";
import { Button } from "../../ui/Button";

import * as yup from "yup";
import { setNewPassword } from "./thanks/setNewPasswordThunk";
import { ICreate } from "./types";
import { RoutesEnum } from "../../common/routes";

const basicSchema = yup.object().shape({
  password: yup.string().required().min(6),
  passwordConfirm: yup
    .string()
    .required()
    .min(6)
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

export function hasError(form: FormikProps<any>, prop: string): boolean {
  return !!form.errors[prop] && !!form.touched[prop];
}

export const CreateNewPassword: React.FC<ICreate> = ({ code, setCode }) => {
  const dispatch = useAppDispatch();
  const loginForm = useFormik({
    initialValues: {
      password: "",
      passwordConfirm: "",
    },
    validationSchema: basicSchema,
    onSubmit: (values: { password: string }) => {
      !!code &&
        dispatch(
          setNewPassword({ newPassword: values.password, recoveryCode: code })
        );
    },
  });
  // Utils
  const emailHasError = hasError.bind(null, loginForm);
  if (code === undefined) {
    return <Navigate to={"/" + RoutesEnum.LOGIN} />;
  }
  return (
    <LoginWrapper sx={{ margin: "auto" }}>
      <LoginContent>
        <Paper sx={{ padding: "35px" }}>
          <Typography
            variant={"title"}
            sx={{ textAlign: "center", marginBottom: "0.6rem" }}
          >
            Create New Password
          </Typography>
          <LoginForm onSubmit={loginForm.handleSubmit}>
            <Input
              type={"text"}
              error={emailHasError("password")}
              label={
                emailHasError("password")
                  ? loginForm.errors.password
                  : "New password"
              }
              {...loginForm.getFieldProps("password")}
            ></Input>
            <Input
              type={"text"}
              error={emailHasError("passwordConfirm")}
              label={
                emailHasError("passwordConfirm")
                  ? loginForm.errors.passwordConfirm
                  : "Password confirmation"
              }
              {...loginForm.getFieldProps("passwordConfirm")}
            ></Input>
            <Typography
              sx={{
                fontSize: "14px",
                color: "#797476",
                textAlign: "end",
                maxWidth: "300px",
              }}
            >
              Your password must be between 6 and 20 characters
            </Typography>
            <Button
              type={"submit"}
              bColor={"#fff"}
              disabled={emailHasError("email")}
            >
              Create new password
            </Button>
          </LoginForm>
        </Paper>
      </LoginContent>
    </LoginWrapper>
  );
};
