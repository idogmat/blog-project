import React from "react";
import { RecoveryEmailModal } from "./RecoveryEmailModal";
import { NewPasswordModal } from "./SetNewPassword";

export const Modals = (): JSX.Element => {
  return (
    <>
      <RecoveryEmailModal />
      <NewPasswordModal />
    </>
  );
};
