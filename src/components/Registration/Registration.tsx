import React, { useState } from "react";
import {
  LoginContent,
  LoginForm,
  LoginOffer,
  LoginWrapper,
} from "../../ui/LoginForm";
import { useAllSelector, useAppDispatch } from "../../utils/hooks";
import { appStateSelector, authStateSelector } from "../../store/selectors";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import * as yup from "yup";
import { FormikProps, useFormik } from "formik";
import { IRegisterFields, login, register } from "../../store/thunks/authThunk";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Paper } from "../../ui/Paper";
import { Typography } from "../../ui/Typography";
import { Button } from "../../ui/Button";
import { Input } from "../../ui/Input";
import loginImg from "../../assets/svg/login.svg";
import { RoutePaths, RoutesEnum } from "../../common/routes";
import { withAuthentication } from "../../common/routes/hoc";

export const basicSchema = yup.object().shape({
  email: yup.string().email(),
  password: yup.string().min(5, "Password is too short").required("Required"),
});

export function hasError(form: FormikProps<any>, prop: string): boolean {
  return !!form.errors[prop] && !!form.touched[prop];
}

export const Registration = () => {
  // Dispatch & selectors
  const dispatch = useAppDispatch();
  // Local State
  const { isLogged } = useAllSelector(authStateSelector);
  const [showPassword, setShowPassword] = useState(false);
  const passwordIcon = showPassword ? <MdVisibility /> : <MdVisibilityOff />;
  // Formik
  const navigate = useNavigate();
  const loginForm = useFormik({
    initialValues: {
      login: "",
      email: "",
      password: "",
    },
    validationSchema: basicSchema,
    onSubmit: (values: IRegisterFields) => {
      dispatch(register(values));
    },
  });

  // Vars
  const loginHasError = hasError.bind(null, loginForm);

  // Utils
  const changePasswordFieldType = () => setShowPassword((prev) => !prev);

  return (
    <>
      {isLogged ? (
        <Navigate to={"/" + RoutesEnum.BLOGS} />
      ) : (
        <LoginWrapper sx={{ margin: "auto" }}>
          <LoginContent>
            <Paper sx={{ padding: "35px" }}>
              <Typography
                variant={"title"}
                sx={{ textAlign: "center", marginBottom: "0.6rem" }}
              >
                Sign in
              </Typography>
              <LoginForm onSubmit={loginForm.handleSubmit}>
                <Input
                  type={"text"}
                  error={loginHasError("login")}
                  label={
                    loginHasError("login") ? loginForm.errors.login : "Username"
                  }
                  {...loginForm.getFieldProps("login")}
                ></Input>
                <Input
                  type={"text"}
                  error={loginHasError("email")}
                  label={
                    loginHasError("email") ? loginForm.errors.email : "Email"
                  }
                  {...loginForm.getFieldProps("email")}
                ></Input>
                <Input
                  type={showPassword ? "text" : "password"}
                  error={loginHasError("password")}
                  label={
                    loginHasError("password")
                      ? loginForm.errors.password
                      : "Password"
                  }
                  {...loginForm.getFieldProps("password")}
                  endItem={
                    <Button
                      type="button"
                      semantic
                      onClick={changePasswordFieldType}
                    >
                      {passwordIcon}
                    </Button>
                  }
                ></Input>
                <Typography
                  sx={{
                    fontSize: "14px",
                    color: "#797476",
                    textAlign: "end",
                    maxWidth: "300px",
                  }}
                >
                  The link has been sent by email. If you don’t receive an
                  email, send link again
                </Typography>
                <Button
                  type={"submit"}
                  bColor={"#fff"}
                  disabled={loginHasError("email") || loginHasError("password")}
                >
                  Sign Up
                </Button>

                <LoginOffer>
                  <Typography variant={"sub-title-md"} as={"span"}>
                    Already a member?
                  </Typography>
                  <Typography
                    underline
                    sx={{ fontSize: "16px", color: "#F8346B" }}
                  >
                    <Link to={"/login"}>Sign in</Link>
                  </Typography>
                </LoginOffer>
              </LoginForm>
            </Paper>
          </LoginContent>
          <img src={loginImg} alt="login" />
        </LoginWrapper>
      )}
    </>
  );
};
