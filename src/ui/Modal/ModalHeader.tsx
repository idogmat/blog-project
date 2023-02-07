import { MdClose } from "react-icons/md";
import { FC } from "react";
import { Flex } from "../Flex";
import { Typography } from "../Typography";
import { Button } from "../Button";

interface IModalHeaderProps {
  title: string;
  handleClose: () => void;
}

export const ModalHeader: FC<IModalHeaderProps> = ({ title, handleClose }) => {
  return (
    <Flex justify="space-between" sx={{ gap: "0.6rem" }}>
      <Typography variant={"title"} as="h3">
        {title}
      </Typography>
      <Button semantic onClick={handleClose}>
        <MdClose />
      </Button>
    </Flex>
  );
};
