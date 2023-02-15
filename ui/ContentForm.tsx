import styled from "styled-components";
import { StyledComponent } from "./type";
interface IContent {
  bgColor: string;
  fDirection: string;
  justify: string;
}

export const ContentForm = styled.div<StyledComponent<Partial<IContent>>>`
  height: 100%;
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: ${({ fDirection }) => fDirection || "stretch"};
  justify-content: ${({ justify }) => justify || "stretch"};
  background: ${({ bgColor }) => bgColor || "#fff"};
`;
