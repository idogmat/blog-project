import React from "react";
import { HeaderWrapper } from "../../ui/HeaderWrapper";
import { Flex } from "../../ui/Flex";
import { Button } from "../../ui/Button";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { Typography } from "../../ui/Typography";
import { authAPI } from "../../api";
import { useAllSelector, useAppDispatch } from "../../utils/hooks";
import { logout } from "./thunks/logout";

export const Header = (): JSX.Element => {
  const user = useAllSelector((state) => state.auth.user);
  const dispatch = useAppDispatch();
  const isLogged = !!user;
  const logoutHandler = (): void => {
    dispatch(logout());
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
        {isLogged ? (
          <Flex sx={{ margin: "auto 1rem", gap: "1rem" }}>
            <Typography>{isLogged ? user.email : ""}</Typography>
            <Button
              onClick={logoutHandler}
              semantic
              sx={{ display: "flex", alignItems: "center" }}
            >
              <RiLogoutBoxRFill /> <Typography>Logout</Typography>
            </Button>
          </Flex>
        ) : (
          ""
        )}
      </Flex>
    </HeaderWrapper>
  );
};
