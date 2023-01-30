import styled from "styled-components";

export const MainWrapper = styled.main`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const PageWrapper = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  > main {
    flex: 1 1 auto;
  }
  > * {
    min-width: 0;
  }
`;
