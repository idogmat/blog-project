import { Flex } from "../Flex";
import styled, { css } from "styled-components";
import { FC, useEffect } from "react";
import FocusTrap from "focus-trap-react";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { lockPadding, unlockPadding, useEscapeKey, useMount } from "./utils";

const ModalWrapper = styled(Flex).attrs({
  justify: "center",
  align: "center",
})`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  z-index: 70;

  overflow-y: auto;
`;

const ModalBackground = styled.div<{ opened: boolean }>`
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100%;

  background: rgba(0, 0, 0, 0.6);

  z-index: 60;

  opacity: 0;
  visibility: hidden;
  pointer-events: none;

  ${({ opened }) =>
    opened &&
    css`
      opacity: 1;
      visibility: visible;
      pointer-events: auto;
    `};

  transition: opacity 3s ease 0s, visibility 0.4s ease 0s;
`;

const ModalContentWrapper = styled.div<{ opened: boolean }>`
  transition: visibility 0.3s ease 0s, opacity 0.3s ease 0s;

  max-height: calc(100vh - 2rem);

  position: absolute;
  padding: 0.5rem;

  opacity: 0;
  visibility: hidden;
  pointer-events: none;

  ${({ opened }) =>
    opened &&
    css`
      opacity: 1;
      visibility: visible;
      pointer-events: auto;
    `};

  z-index: 61;
`;

const ModalContent = styled.div`
  background: #fff;
  max-width: 25rem;
  padding: 1.2rem;
  box-shadow: 0px 0px 8px 0px rgba(64, 64, 64, 0.2);
  border-radius: var(--radius);
`;

interface IModalProps {
  children: React.ReactNode;
  onClose: () => void;
  open: boolean;
}

export const Modal: FC<IModalProps> = ({ open, onClose, children }) => {
  // Vars
  const { mounted } = useMount(open);
  const fullyAssembled = open && mounted;

  // Utils

  useEffect(() => {
    if (!mounted) {
      enableBodyScroll(document.body);
      unlockPadding();

      return;
    }
    lockPadding();
    disableBodyScroll(document.body);
  }, [mounted]);

  // Closing
  useEscapeKey(onClose);
  if (!mounted) return null;

  return (
    <>
      <FocusTrap>
        <ModalWrapper>
          <ModalBackground opened={fullyAssembled} onClick={onClose} />
          <ModalContentWrapper opened={open}>
            <ModalContent>{children}</ModalContent>
          </ModalContentWrapper>
        </ModalWrapper>
      </FocusTrap>
    </>
  );
};
