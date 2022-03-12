import styled from "styled-components";

export const SinglePriceCont = styled.div`
  font-family: sans-serif;
  --brand-color: #bfdf32;
  --brand-act: #1e7e7c;
  --brand-pass: #348585;
  --background-primary: #333333;
  --background-secondary: #f0f0f0;
  --text-primary: rgba(255, 255, 255, 0.5);
  /* --brand-color: #bfdf32;
  --brand-act: #2bb3b1;
  --brand-pass: #4abebd;
  --background-primary: #ffffff;
  --background-secondary: #f0f0f0;
  --text-primary: rgba(0, 0, 0, 0.3); */
  --text-brand-primary: #2bb3b1;
  --text-white-primary: rgba(255, 255, 255, 0.8);
  --text-white-inactive: rgba(255, 255, 255, 0.5);
  flex-grow: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
`;

export const SignUpBanner = styled.div`
  width: 700px;
  height: 550px;
  border-radius: 8px;
  box-shadow: 0px 1px 16px rgba(0, 0, 0, 0.3);
  margin: 32px auto;
  background-color: var(--background-primary);
  overflow: hidden;
  ${({ theme }) =>
    !theme.preview &&
    `@media (max-width: 699px) {
    width: 90%;
    height: fit-content;
    margin: 32px auto;
  }`}
`;

export const FlexCont = styled.div`
  display: flex;
  height: 50%;
  ${({ theme }) => !theme.preview && ``}
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

export const JoinUsCont = styled.div`
  width: 100%;
  height: 50%;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const Cont = styled.div`
  padding: 2.5rem;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${(props) => (props.bgColor ? props.bgColor : "#ffffff")};
  ${({ theme }) =>
    !theme.preview &&
    `@media (max-width: 500px) {
    width: 100%;
    min-height: 300px;
  }`}
`;

export const Header1 = styled.h1`
  font-size: 1.7rem;
  color: var(--text-brand-primary);
  letter-spacing: 2px;
  margin-bottom: 1.5vw;
`;
export const Header2 = styled.h2`
  color: var(--text-white-primary);
  font-size: 1.3rem;
  letter-spacing: 1px;
  margin-bottom: 1.5vw;
`;
export const Highlight = styled(Header2)`
  color: var(--brand-color);
`;
export const Para = styled.p`
  color: var(--text-primary);
  font-size: 1.2rem;
  line-height: 2rem;
  margin-bottom: 1.5vw;
`;
export const Price = styled.span`
  font-size: 2rem;
  font-weight: bold;
  margin-right: 8px;
  color: var(--text-white-primary);
`;
export const SpanStd = styled.span`
  color: var(--text-white-inactive);
  margin: 8px 0px;
`;
export const ParaStd = styled.p`
  color: var(--text-white-primary);
  margin: 4px 0px;
`;
export const SignUpBtn = styled.button`
  border: none;
  height: 3rem;
  border-radius: 4px;
  color: var(--text-white-primary);
  background-color: var(--brand-color);
  font-size: 1.2rem;
  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.15);
  }
`;
