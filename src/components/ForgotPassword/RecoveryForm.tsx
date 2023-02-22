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
import { VerificationLinkSent } from "./VerificationLinkSent";
import { ForgotPassword } from "./ForgotPassword";

export const RecoveryForm = () => {
  const dispatch = useAppDispatch();
  // Local State
  const [sent, setSent] = useState(false);
  const { isLogged } = useAllSelector(authStateSelector);
  // Formik
  const navigate = useNavigate();

  return sent ? <VerificationLinkSent /> : <ForgotPassword setSent={setSent} />;
};
