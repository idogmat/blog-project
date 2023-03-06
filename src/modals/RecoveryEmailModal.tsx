import React from "react";
import { ModalBase } from "../ui/Modal/ModalBase";
import { Flex } from "../ui/Flex";
import { Typography } from "../ui/Typography";
import { Button } from "../ui/Button";
import { useAllSelector, useAppDispatch } from "../utils/hooks";
import { modalAC } from "./slicer/modalsSlicer";
import { recoveryEmailStateSelector } from "../store/selectors";

export const RecoveryEmailModal = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const open = useAllSelector((state) => state.modals.recoveryEmail);
  const email = useAllSelector(recoveryEmailStateSelector);
  const closeModal = (): void => {
    dispatch(modalAC.setRecoveryEmail(!open));
  };
  return (
    <ModalBase
      handleClose={() => closeModal()}
      modalTitle="Email sent"
      open={open}
    >
      <Flex
        fDirection={"column"}
        sx={{ padding: "0.6rem", minWidth: "22.5rem" }}
      >
        <Typography>
          We have sent a link to confirm your email to {email}
        </Typography>
        <Button onClick={() => closeModal()}>OK</Button>
      </Flex>
    </ModalBase>
  );
};
