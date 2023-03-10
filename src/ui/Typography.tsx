import styled, { css } from "styled-components";
import { StyledComponent } from "./type";

interface ITypographyProps {
  variant: "title" | "sub-title-md" | "sub-title-sm";
  align: string;
  underline: boolean;
}

export const Typography = styled.p<StyledComponent<Partial<ITypographyProps>>>`
  color: var(--color-primary);
  font-family: var(--family);
  text-align: ${({ align }) => align || "left"};
  ${(p) =>
    p.underline &&
    css`
      &:hover {
        text-decoration: underline;
      }
    `}
  ${(p) =>
    p.variant === "title" &&
    css`
      font-weight: var(--fw-bold);
      font-size: var(--fs-big);
    `};

  ${(p) =>
    p.variant === "sub-title-md" &&
    css`
      font-weight: var(--fw-bold);
      font-size: var(--fs-md);
    `};
  ${(p) =>
    p.variant === "sub-title-sm" &&
    css`
      font-weight: var(--fw-sm);
      font-size: var(--fs-sm);
    `};
  ${(p) => ({ ...p.sx })}
`;
