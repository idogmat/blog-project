import React from "react";
import { ModalBase } from "../ui/Modal/ModalBase";
import { Flex } from "../ui/Flex";
import { Typography } from "../ui/Typography";
import { Button } from "../ui/Button";
import { useAllSelector, useAppDispatch } from "../utils/hooks";
import { modalAC } from "./slicer/modalsSlicer";
import { recoveryEmailStateSelector } from "../store/selectors";
import { useNavigate } from "react-router-dom";
import { RoutesEnum } from "../common/routes";

export const NewPasswordModal = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const open = useAllSelector((state) => state.modals.newPassword);
  const closeModal = (): void => {
    dispatch(modalAC.modalNewPassword(!open));
    navigate("/" + RoutesEnum.LOGIN);
  };
  return (
    <ModalBase
      handleClose={() => closeModal()}
      modalTitle="Change password"
      open={open}
    >
      <Flex
        fDirection={"column"}
        sx={{ padding: "0.6rem", minWidth: "22.5rem" }}
      >
        <Typography>Your password was changed</Typography>
        <Button onClick={() => closeModal()}>OK</Button>
      </Flex>
    </ModalBase>
  );
};
