import styled from "styled-components";
import { StyledComponent } from "./type";
interface IImage {
  width: string;
  height: string;
  bRadius: string;
  oFit: string;
}
export const Image = styled.img<StyledComponent<Partial<IImage>>>`
  width: ${({ width }) => width || "150px"};
  height: ${({ height }) => height || "150px"};
  border-radius: ${({ bRadius }) => bRadius || "50%"};
  object-fit: ${({ oFit }) => oFit || "none"};
  ${({ sx }) => ({ ...sx })}
`;
