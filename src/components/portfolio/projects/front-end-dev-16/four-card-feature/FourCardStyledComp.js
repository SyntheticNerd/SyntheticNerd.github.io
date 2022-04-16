import styled from "styled-components";
export const FourCardFeatureCont = styled.div`
  --text1: hsl(234, 12%, 34%);
  --text2: hsl(229, 6%, 66%);
  --text3: hsl(0, 0%, 98%);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px 16px;
  background-color: #101010;
  height: 100%;
  min-height: fit-content;
  position: relative;
  min-width: 80vw;
  /* @media(min-width: 900px){
    padding: 32px 128px;
  } */
`;
export const IntroCont = styled.div`
  margin-top: 16px;
  text-align: center;
  width: 80%;
  max-width: 560px;
  transition: all 0.3s;
  &:hover {
    -webkit-transform:scale(1.1);
    transform: scale(1.1);
  }
`;
export const CardCont = styled.div`
  position: relative;
  max-width: 400px;
  height: 250px;
  box-shadow: 0px 16px 20px rgba(0, 0, 0, 0.4);
  margin: 16px 16px;
  padding: 32px;
  border-radius: 8px;
  background-color: #1e1e1e;
  transition: all 0.3s;
  ${(props) =>
    props.borderColor && `border-top: 5px solid ${props.borderColor};`}
  ${({ theme }) =>
    !theme.preview &&
    `
      @media (max-width: 900px) {
        width: 100%;
        max-width: 400px;
        margin: 16px 0px;
      }
  `}
  &:hover {
    -webkit-transform:scale(1.1);
    transform: scale(1.1);
  }
`;
export const FourCard = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  height: fit-content;
  ${({ theme }) =>
    !theme.preview &&
    `@media (max-width: 1399px) {
      justify-content: center;
      max-width: 1000px;
      flex-wrap: wrap;
      }
      @media (max-width: 964px) {
        flex-direction: column;
      }`}
`;
export const TwoCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${({ theme }) =>
    !theme.preview &&
    `@media (max-width: 1399px) {
    order: 1;
    flex-direction: row;
  }
  @media (max-width: 964px) {
    flex-direction: column;
  }`}
`;
export const Text1 = styled.h1`
  ${({ theme }) =>
    !theme.preview &&
    ` @media (max-width: 1399px) {
    font-size: 1.5em;
  }`}
`;
export const Text2 = styled.h2`
  font-weight: 200;
  font-size: 2.2em;
  color: var(--text2);
  ${({ theme }) =>
    !theme.preview &&
    `@media (max-width: 1399px) {
    font-size: 1.5em;
  }`}
`;
export const Text3 = styled.h3``;
export const Text4 = styled.p`
  color: var(--text2);
`;

export const FeatureImg = styled.img`
  position: absolute;
  bottom: 32px;
  right: 32px;
`;
