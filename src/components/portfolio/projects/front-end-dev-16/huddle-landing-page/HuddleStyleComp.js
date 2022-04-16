import styled from "styled-components";
export const HuddleMain = styled.div`
  --violet: hsl(257, 40%, 49%);
  --soft-magenta: hsl(300, 69%, 71%);
  --headerBlue: #00252e;
  --iconGrey: #a7b9c8;
  --prevGrey: #e1e8ee;
  --grad1: linear-gradient(131.91deg, #fcbc77 0%, #ff6ab1 100%);
  --grad2: linear-gradient(131.91deg, #01c3fb 0%, #0182fb 100%);
  --grad3: linear-gradient(131.91deg, #fb53c4 0%, #ae53f3 100%);

  background: no-repeat center/cover var(--violet)
    ${({ bgDesk }) => bgDesk && `url(${bgDesk})`};
  height: 720px;
  width: 1440px;
  text-align: left;
  padding: 0px 80px;
  position: relative;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 16px 16px var(--shadow1);
  /* -webkit-transform: scale(0.88); */
  /* transform: scale(0.88); */
  
  @media(max-width: 1000px){
    background: no-repeat top/100% var(--violet) url(${({ bgDesk, bgMob, theme }) => bgMob && !theme.preview ? `${bgMob}` : `${bgDesk}`});
  }
  ${({ theme }) =>
    !theme.preview &&
    `
    height: fit-content;
    width: 100%;
    @media (max-width: 1000px) {
    padding: 0px 32px;
    min-height: fit-content;
  }`}
`;
export const FlexBox = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-self: flex-start;
  justify-content: space-around;
  ${({ theme }) =>
    !theme.preview &&
    `
    @media (max-width: 1000px) {
    width: 100%;
    flex-direction: column;
  }`}
`;
export const Logo = styled.img`
  width: 13rem;
  height: 3rem;
  margin-top: 50px;
  ${({ theme }) =>
    !theme.preview &&
    `
    @media (max-width: 1000px) {
    margin-top: 32px;
    width: 10rem;
  }`}
`;
export const FooterCont = styled.div`
  justify-self: flex-end;
  display: flex;
  justify-content: flex-end;
  color: white;
  margin-bottom: 50px;
  ${({ theme }) =>
    !theme.preview &&
    `
    @media (max-width: 1000px) {
    justify-content: center;
    padding-bottom: 32px;
  }`}
`;
export const SocLink = styled.div`
  margin: 0px 16px;
  border: 2px solid white;
  border-radius: 50%;
  width: 2.5em;
  height: 2.5em;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Section1 = styled.div`
  width: 58%;
  height: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${({ theme }) =>
    !theme.preview &&
    `
    @media (max-width: 1000px) {
    width: 100%;
    margin: 64px 0px;
  }`}
`;

export const RegCont = styled.div`
  text-align: left;
  width: 40%;
  padding-left: 32px;
  ${({ theme }) =>
    !theme.preview &&
    `
    @media (max-width: 1000px) {
    text-align: center;
    width: 100%;
    padding-left: 0px;
  }`}
`;
export const MainH1 = styled.h1`
  color: white;
  margin-bottom: 16px;
  font-size: 2rem;
  line-height: 4rem;
  ${({ theme }) =>
    !theme.preview &&
    `
    @media (max-width: 1000px) {
    font-size: 1.7rem;
    line-height: 2.7rem;
  }`}
`;
export const MainText = styled.p`
  color: white;
  opacity: 0.88;
  line-height: 1.5rem;
  margin-bottom: 16px;
`;
export const RegBtn = styled.button`
  color: var(--violet);
  padding: 16px 64px;
  background: white;
  border: none;
  border-radius: 32px;
  font-weight: 600;
  letter-spacing: 2px;
  margin-bottom: 64px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.5);
    -webkit-transform: scale(1.05);
    transform: scale(1.05);
    color: white;
    background-color: var(--soft-magenta);
  }
`;
