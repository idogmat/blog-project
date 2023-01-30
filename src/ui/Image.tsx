import styled from "styled-components";
import { StyledComponent } from "./type";
interface IImage {
  size: string;
  bRadius: string;
}
export const Image = styled.img<StyledComponent<Partial<IImage>>>`
  width: ${({ size }) => size || "150px"};
  height: ${({ size }) => size || "150px"};
  border-radius: ${({ bRadius }) => bRadius || "50%"};
  object-fit: none;
`;
