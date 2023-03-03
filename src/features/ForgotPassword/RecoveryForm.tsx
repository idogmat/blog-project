import React, { useState } from "react";
import { useAllSelector } from "../../utils/hooks";
import { recoveryEmailStateSelector } from "../../store/selectors";
import { useNavigate } from "react-router-dom";
import { Typography } from "../../ui/Typography";
import { Button } from "../../ui/Button";
import { ForgotPassword } from "./ForgotPassword";
import { ModalBase } from "../../ui/Modal/ModalBase";
import { Flex } from "../../ui/Flex";

export const RecoveryForm = (): JSX.Element => {
  // Local State
  const [sent, setSent] = useState(false);

  const navigate = useNavigate();
  const email = useAllSelector(recoveryEmailStateSelector);
  const navToLogin = (): void => {
    navigate(-1);
  };
  return sent ? (
    <ModalBase
      handleClose={() => setSent(false)}
      modalTitle="Email sent"
      open={sent}
    >
      <Flex
        fDirection={"column"}
        sx={{ padding: "0.6rem", minWidth: "22.5rem" }}
      >
        <Typography>
          We have sent a link to confirm your email to {email}
        </Typography>
        <Button onClick={navToLogin}>OK</Button>
      </Flex>
    </ModalBase>
  ) : (
    <ForgotPassword setSent={setSent} />
  );
};
