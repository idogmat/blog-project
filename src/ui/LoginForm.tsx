import styled from "styled-components";
import { Flex } from "./Flex";
import { StyledComponent } from "./type";

export const LoginWrapper = styled(Flex).attrs({
  fDirection: "row",
  align: "center",
  justify: "center",
})`
  padding-top: 5rem;

  @media (max-width: 768px) {
    padding-bottom: 5vh;
  }
  ${(sx) => ({ ...sx.sx })}
`;
export const LoginContent = styled(Flex).attrs<StyledComponent<{}>>({
  fDirection: "column",
})`
  min-width: 18.125rem;
  position: relative;

  ${(p) => ({ ...p.sx })}
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.9375rem;
`;

export const LoginOffer = styled(Flex).attrs({
  fDirection: "column",
  align: "center",
  gap: "0.6rem",
})``;
