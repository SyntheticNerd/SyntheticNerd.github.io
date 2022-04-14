import styled from "styled-components";

export const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 5%;
  gap: 24px 24px;
  border-radius: 0.5em;
  box-shadow: 0px 8px 0px rgba(0, 0, 0, 0.2);
  background-color: white;
  & > p {
    text-align: center;
    color: hsl(246, 25%, 77%);
    font-size: 0.9em;
    margin-top: 0px;
    margin-bottom: 32px;
    b {
      color: hsl(0, 100%, 74%);
      cursor: pointer;
    }
  }
  input[type="submit"] {
    background-color: hsl(154, 59%, 51%);
    color: white;
    font-family: "Poppins";
    font-weight: 500;
    letter-spacing: 0.15em;
    padding: 1.3em;
    /* padding: max(1.5em, 3.5%) max(4em, 3.5%); */
    border-radius: 0.5em;
    border: none;
    box-shadow: 0px 4px 0px hsl(154, 50%, 40%);
    cursor: pointer;
    &:hover {
      background-color: hsl(154, 70%, 60%);
    }
  }
`;
export const InputWrap = styled.div`
  border: 2px solid
    ${({ valid }) => (valid === "true" ? `lightgrey` : `hsl(0, 100%, 74%)`)};
  border-radius: 0.3em;
  position: relative;
  display: flex;
  &:focus-within {
    border: 2px solid
      ${({ valid }) =>
        valid === "true" ? `hsl(249, 10%, 26%)` : `hsl(0, 100%, 74%)`};
    &:hover {
      border: 2px solid
        ${({ valid }) =>
          valid === "true" ? `hsl(249, 10%, 26%)` : `hsl(0, 100%, 74%)`};
    }
  }
  &:hover {
    border: 2px solid
      ${({ valid }) =>
        valid === "true" ? `hsl(246, 25%, 77%)` : `hsl(0, 100%, 74%)`};
  }
  & > input {
    border: none;
    outline: none;
    font-family: "Poppins";
    font-weight: 600;
    font-size: min(3.5vw, 1em);
    border-radius: 0.3em;
    padding: max(1.2em, 3.5%);
    width: 93%;
  }
  &::before {
    ${({ valid }) => valid === "true" && `display: none`}
    content: "${({ errormsg }) => errormsg}";
    font-style: italic;
    font-size: 0.8em;
    position: absolute;
    top: 105%;
    right: 0%;
    color: hsl(0, 100%, 74%);
  }

  &::after {
    ${({ valid }) => valid === "true" && `display: none`}
    content: "";
    background-image: url(${process.env.PUBLIC_URL + "/images/icon-error.svg"});
    padding: 12px;
    border-radius: 50%;
    position: absolute;
    right: 5%;
    top: 50%;
    transform: translateY(-50%);
  }
  ${({ valid }) => valid === "false" && `margin-bottom: min(2em, 5%);`}
`;
