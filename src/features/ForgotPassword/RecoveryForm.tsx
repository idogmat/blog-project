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
import { VerificationLinkExpired } from "./VerificationLinkExpired";
import { ForgotPassword } from "./ForgotPassword";
import { CreateNewPassword } from "./CreateNewPassword";

export const RecoveryForm = () => {
  // Local State
  const [sent, setSent] = useState(false);
  // Formik
  const navigate = useNavigate();

  return sent ? <div>message sent</div> : <ForgotPassword setSent={setSent} />;
};
