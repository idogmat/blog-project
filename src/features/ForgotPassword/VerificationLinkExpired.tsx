import React from "react";
import { LoginContent, LoginWrapper } from "../../ui/LoginForm";
import { Typography } from "../../ui/Typography";
import { Button } from "../../ui/Button";
import verificationEmail from "../../assets/svg/verification.svg";
import { Flex } from "../../ui/Flex";
import { useAllSelector, useAppDispatch } from "../../utils/hooks";
import { recoveryEmailStateSelector } from "../../store/selectors";
import { recoveryThunk } from "./thanks/recoveryThunk";
import { useNavigate } from "react-router-dom";
import { RoutesEnum } from "../../common/routes";

export const VerificationLinkExpired = (): JSX.Element => {
  const dispatch = useAppDispatch();
  // const email = useAllSelector(recoveryEmailStateSelector);
  const email = localStorage.getItem("ele");
  console.log(email);
  const navigate = useNavigate();
  const sendEmail = (): void => {
    !!email && dispatch(recoveryThunk(email));
    // navigate("/" + RoutesEnum.LOGIN);
  };
  return (
    <LoginWrapper
      sx={{ margin: "auto", display: "flex", flexDirection: "column" }}
    >
      <LoginContent sx={{ paddingBottom: "1rem" }}>
        <Flex fDirection={"column"} sx={{ gap: "2rem" }}>
          <Typography
            variant={"title"}
            sx={{ textAlign: "center", marginBottom: "0.6rem" }}
          >
            Email verification link expired
          </Typography>
          <Typography
            align={"center"}
            sx={{
              fontSize: "14px",
              color: "#797476",

              maxWidth: "300px",
            }}
          >
            The link has been sent by email. If you don’t receive an email, send
            link again
          </Typography>
          <Button
            onClick={sendEmail}
            bColor={"#fff"}
            sx={{ display: "flex", margin: "auto" }}
          >
            Resend verification link
          </Button>
        </Flex>
      </LoginContent>
      <img src={verificationEmail} alt="verificationEmail" />
    </LoginWrapper>
  );
};
