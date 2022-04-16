import styled from "styled-components";

export const PortfolioPage = styled.div`
  padding-bottom: 64px;
  position: relative;
  height: calc(100vh - 96px);
  ${({ modal }) => modal && `overflow: hidden;`}
`;
