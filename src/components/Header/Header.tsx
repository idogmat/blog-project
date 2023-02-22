import React from "react";
import { HeaderWrapper } from "../../ui/HeaderWrapper";
import { Flex } from "../../ui/Flex";
import { Button } from "../../ui/Button";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { Typography } from "../../ui/Typography";
import { authAPI } from "../../api";

export const Header = () => {
  const logout = () => {
    console.log(authAPI.logout());
  };
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
          <Button
            onClick={logout}
            semantic
            sx={{ display: "flex", alignItems: "center" }}
          >
            <RiLogoutBoxRFill /> <Typography>Logout</Typography>
          </Button>
        </Flex>
      </Flex>
    </HeaderWrapper>
  );
};
