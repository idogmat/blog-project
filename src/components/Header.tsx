import React from "react";
import { HeaderWrapper } from "../ui/HeaderWrapper";
import { Flex } from "../ui/Flex";
import { Button } from "../ui/Button";
import { FiLogOut } from "react-icons/fi";
import { Typography } from "../ui/Typography";

export const Header = () => {
  return (
    <HeaderWrapper>
      <Flex
        fDirection={"row"}
        justify={"space-between"}
        sx={{ margin: "auto 1rem" }}
      >
        <Flex sx={{ margin: "auto 1rem", alignItems: "center", gap: "1rem" }}>
          <Typography variant={"title"}>Blogger Platform</Typography>
          <Typography>Superadmin</Typography>
        </Flex>

        <Flex sx={{ margin: "auto 1rem", gap: "1rem" }}>
          <Typography>UserName</Typography>
          <Button semantic sx={{ display: "flex", alignItems: "center" }}>
            <FiLogOut /> <Typography>Logout</Typography>
          </Button>
        </Flex>
      </Flex>
    </HeaderWrapper>
  );
};
