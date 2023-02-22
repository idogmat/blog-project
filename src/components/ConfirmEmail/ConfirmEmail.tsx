import React from "react";
import { Flex } from "../../ui/Flex";
import { LoginContent, LoginWrapper } from "../../ui/LoginForm";
import confirmEmail from "../../assets/svg/confirmEmail.svg";
import { Button } from "../../ui/Button";
import { Typography } from "../../ui/Typography";
import { Link } from "react-router-dom";

export const ConfirmEmail = () => {
  return (
    <LoginWrapper sx={{ margin: "auto" }}>
      <LoginContent sx={{ gap: "1rem" }}>
        <Flex fDirection={"column"} justify={"center"} sx={{ gap: "1rem" }}>
          <Typography align={"center"} variant={"sub-title-md"}>
            Congratulations! Your email has been confirmed
          </Typography>
          <Button bColor={"#fff"} sx={{ margin: "auto" }}>
            <Link to={"/login"}>Sign in</Link>
          </Button>
        </Flex>
        <img src={confirmEmail} alt="login" />
      </LoginContent>
    </LoginWrapper>
  );
};
