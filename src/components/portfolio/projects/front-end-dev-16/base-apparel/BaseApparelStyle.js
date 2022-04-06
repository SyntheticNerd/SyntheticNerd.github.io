import styled from "styled-components";

export const BALandingPage = styled.div`
  --background-gradient: 135deg, hsl(0, 0%, 100%), hsl(0, 100%, 98%);
  --button-gradient: 135deg, hsl(0, 80%, 86%), hsl(0, 74%, 74%);
  --desaturated-red: hsl(0, 36%, 70%);
  --desaturated-red-border: rgba(206, 151, 151, 0.5);
  --soft-red: hsl(0, 93%, 68%);
  --dark-grey-red: hsl(0, 6%, 24%);
  --main-margin: 20%;
  --header-size: 3.5em;
  --p-size: 16px;

  height: 800px;
  width: 1440px;
  background-image: linear-gradient(var(--background-gradient));
  background-size: 66% 100%;
  color: black;
  display: flex;
  text-align: left;
  -webkit-transform:scale(0.88);
    transform: scale(0.88);
  font-family: "Josefin Sans", sans-serif;
  ${({ theme }) =>
    !theme.preview &&
    `
    height: 100vh;
    max-height: 1200px;
    width: auto;    
    @media (max-width: 900px) {
    --main-margin: 10%;
    --header-size: 2.5em;
    height: fit-content;
    background-size: 100% 100%;
  }`}
`;

export const ComingSoon = styled.div`
  width: 100%;
  background: url(${({ backgroundImg }) => `${backgroundImg}`}) center/100%
    no-repeat;
  height: 100%;
  display: grid;
  grid-template-rows: 1fr 1fr 2fr 1fr 1fr;
  grid-template-columns: 60% auto;
  ${({ theme }) =>
    !theme.preview &&
    ` @media (max-width: 900px) {
    text-align: center;
    grid-template-columns: 100%;
    grid-template-rows: 80px 4fr 2fr 1fr 1fr;
  }
  @media (max-width: 500px) {
    grid-template-rows: 80px 300px 2fr 1fr 1fr;
  }`}
`;

export const HeroImg = styled.div`
  background: url(${({ backgroundImgDesk }) => `${backgroundImgDesk}`})
    top/cover no-repeat;
  opacity: 90%;
  grid-column: 2 / 3;
  grid-row: 1 / 6;
  ${({ theme }) =>
    !theme.preview &&
    `@media (max-width: 900px) {
    grid-column: 1 / 2;
    grid-row: 2 /3;
  }`}
`;

export const Logo = styled.img`
  width: 10rem;
  margin: 64px var(--main-margin) 0px;
  grid-row: 1 / 2;
  ${({ theme }) =>
    !theme.preview &&
    ` @media (max-width: 900px) {
    width: 7rem;
    margin: auto var(--main-margin);
  }`}
`;

export const Center = styled.div`
  grid-row: 3 / 4;
  margin: 0px var(--main-margin);
  ${({ theme }) =>
    !theme.preview &&
    `@media (max-width: 900px) {
    margin: 64px var(--main-margin) 0px;
  }`}
`;

export const HBrand = styled.h1`
  color: var(--desaturated-red);
  font-weight: 300;
  font-size: var(--header-size);
  text-transform: uppercase;
  letter-spacing: 1rem;
  line-height: 1.1em;
`;
export const HMain = styled.h1`
  color: var(--dark-grey-red);
  text-transform: uppercase;
  font-weight: 600;
  font-size: var(--header-size);
  letter-spacing: 1rem;
  line-height: 1.1em;
`;
export const Para = styled.p`
  margin-top: 16px;
  color: var(--desaturated-red);
  font-weight: 400;
  line-height: 1.8em;
  font-size: var(--p-size);
`;

export const CallToAction = styled.form`
  position: relative;
  display: flex;
  height: 3rem;
  grid-row: 4 / 5;
  margin: 36px var(--main-margin) 0px;
  &:before {
    ${({ validState }) => validState && `display: none`}
    content: "";
    height: 30px;
    width: 30px;
    background: url(${({ errorImg }) => `${errorImg}`}) center/100% no-repeat;
    position: absolute;
    top: 50%;
    right: 7em;
    transform: translateY(-50%);
    ${({ theme }) =>
      !theme.preview &&
      `@media (max-width: 900px) {
      right: 5em;
    }`}
  }
  &:after {
    ${({ validState }) => validState && `display: none`}
    content: "Please provide a valid email";
    position: absolute;
    bottom: -8px;
    left: 32px;
    transform: translateY(100%);
    color: var(--soft-red);
  }
`;
export const EmailInput = styled.input`
  font-size: 16px;
  font-weight: 300;
  height: 100%;
  border-radius: 4em;
  width: 100%;
  border: 2px solid
    ${({ validState }) =>
      validState ? "var(--desaturated-red-border)" : "var(--soft-red)"};
  color: var(--desaturated-red);
  background: transparent;
  padding-left: 32px;
  outline: none;
  &:focus {
    color: var(--dark-grey-red);
  }
`;
export const SubmitBtn = styled.button`
  position: absolute;
  right: 0;
  height: 100%;
  width: 7em;
  border-radius: 4em;
  border: none;
  background: linear-gradient(var(--button-gradient));
  box-shadow: 0px 2px 2px rgba(150, 0, 0, 0.2);
  transition: all 0.3s;
  cursor: pointer;
  ${({ theme }) =>
    !theme.preview &&
    `@media (max-width: 900px) {
    width: 5em;
  }
  &:hover {
    -webkit-transform:scale(1.2);
    transform: scale(1.2);
    box-shadow: 0px 16px 16px rgba(150, 0, 0, 0.2);
  }`}
`;
