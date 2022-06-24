import styled from "styled-components";

export const PortfolioPage = styled.div`
  padding-bottom: 64px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${({ modal }) => modal && `overflow: hidden;`}
`;
