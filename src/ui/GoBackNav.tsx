import styled from "styled-components";
import { Button } from "./Button";

export const GoBackNav = styled(Button)`
  background: transparent;
  padding-left: 20px;
  border: none;
  cursor: pointer;
  font-size: 20px;
  background-repeat: no-repeat;
  background-position: left;
  &:hover {
    color: var(--color-main);
  }
  svg {
    margin: -3px 5px;
  }
`;
