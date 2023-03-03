import styled from "styled-components";

export const NavElement = styled.li`
  width: 100%;
  font-size: 24px;
  margin: auto;
  &:hover {
    color: var(--color-main);
  }
  a {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    gap: 5px;
    &.active {
      color: var(--color-main);
    }
  }
`;
