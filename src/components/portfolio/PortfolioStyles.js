import styled from "styled-components";

export const PortfolioPage = styled.div`
  padding: 64px 0px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${({ modal }) => modal && `overflow: hidden;`}
`;
