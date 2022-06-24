import styled from "styled-components";

export const PortfolioPage = styled.div`
  padding-bottom: 64px;
  position: relative;
  ${({ modal }) => modal && `overflow: hidden;`}
`;
