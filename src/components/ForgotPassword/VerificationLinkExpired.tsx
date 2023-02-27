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
import verificationEmail from "../../assets/svg/verification.svg";
import { Flex } from "../../ui/Flex";

export const VerificationLinkExpired = () => {
  return (
    <LoginWrapper
      sx={{ margin: "auto", display: "flex", flexDirection: "column" }}
    >
      <LoginContent sx={{ paddingBottom: "1rem" }}>
        <Flex fDirection={"column"} sx={{ gap: "2rem" }}>
          <Typography
            variant={"title"}
            sx={{ textAlign: "center", marginBottom: "0.6rem" }}
          >
            Email verification link expired
          </Typography>
          <Typography
            align={"center"}
            sx={{
              fontSize: "14px",
              color: "#797476",

              maxWidth: "300px",
            }}
          >
            The link has been sent by email. If you don’t receive an email, send
            link again
          </Typography>
          <Button bColor={"#fff"} sx={{ display: "flex", margin: "auto" }}>
            Resend verification link
          </Button>
        </Flex>
      </LoginContent>
      <img src={verificationEmail} alt="verificationEmail" />
    </LoginWrapper>
  );
};
