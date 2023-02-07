import { FC, ReactElement } from "react";
import { Modal } from "./Modal";
import { ModalHeader } from "./ModalHeader";

interface IModalBaseProps {
  open: boolean;
  handleClose: () => void;
  children: ReactElement;
  modalTitle: string;
}

export const ModalBase: FC<IModalBaseProps> = ({
  open,
  handleClose,
  children,
  modalTitle,
}) => {
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalHeader title={modalTitle} handleClose={handleClose} />
        {children}
      </Modal>
    </>
  );
};
