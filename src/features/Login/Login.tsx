import React, { useState } from "react";
import {
  LoginContent,
  LoginForm,
  LoginOffer,
  LoginWrapper,
} from "../../ui/LoginForm";
import { useAllSelector, useAppDispatch } from "../../utils/hooks";
import { authStateSelector } from "../../store/selectors";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import * as yup from "yup";
import { FormikProps, useFormik } from "formik";
import { login } from "./thunks/login";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Paper } from "../../ui/Paper";
import { Typography } from "../../ui/Typography";
import { Button } from "../../ui/Button";
import { Input } from "../../ui/Input";
import loginImg from "../../assets/svg/login.svg";
import { RoutesEnum } from "../../common/routes";
import { IFields } from "./types";

export const basicSchema = yup.object().shape({
  password: yup.string().min(5, "Password is too short").required("Required"),
});
export function hasError(form: FormikProps<any>, prop: string): boolean {
  return !!form.errors[prop] && !!form.touched[prop];
}

export const Login = (): JSX.Element => {
  // Dispatch & selectors
  const dispatch = useAppDispatch();
  // Local State
  const { isAuth } = useAllSelector(authStateSelector);
  const [showPassword, setShowPassword] = useState(false);
  const passwordIcon = showPassword ? <MdVisibility /> : <MdVisibilityOff />;
  // Formik
  const loginForm = useFormik({
    initialValues: {
      loginOrEmail: "",
      password: "",
    },
    validationSchema: basicSchema,
    onSubmit: (values: IFields) => {
      dispatch(login(values));
    },
  });

  // Vars
  const loginHasError = hasError.bind(null, loginForm);

  // Utils
  const changePasswordFieldType = (): void => setShowPassword((prev) => !prev);

  return (
    <>
      {isAuth ? (
        <Navigate to={"/" + RoutesEnum.BLOGS} />
      ) : (
        <LoginWrapper sx={{ margin: "auto" }}>
          <LoginContent>
            {/*{isLoading && (*/}
            {/*  <div className={styles.preventSending}>*/}
            {/*    <Preloader />*/}
            {/*  </div>*/}
            {/*)}*/}

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
                  error={loginHasError("loginOrEmail")}
                  label={
                    loginHasError("loginOrEmail")
                      ? loginForm.errors.loginOrEmail
                      : "Email or Login"
                  }
                  {...loginForm.getFieldProps("loginOrEmail")}
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
                  underline
                  sx={{ fontSize: "16px", color: "#F8346B", textAlign: "end" }}
                >
                  <Link to={"/recovery"}>Forgot Password?</Link>
                </Typography>
                <Button
                  type={"submit"}
                  bColor={"#fff"}
                  disabled={loginHasError("email") || loginHasError("password")}
                >
                  Sign in
                </Button>

                <LoginOffer>
                  <Typography variant={"sub-title-md"} as={"span"}>
                    {"Haven't account?"}
                  </Typography>
                  <Typography
                    underline
                    sx={{ fontSize: "16px", color: "#F8346B" }}
                  >
                    <Link to={"/register"}>Sign up</Link>
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
