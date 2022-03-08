import styled, { createGlobalStyle } from "styled-components";

export const CSSVariables = styled.div`
  --gold-gradient: linear-gradient(
    #bf953f -65%,
    #fcf6ba -26.33%,
    #b38728 20.08%,
    #fbf5b7 63.91%,
    #aa771c 100%
  );
`;

export const Goldh1 = styled.h1`
  background: var(--gold-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  /* text-shadow: -2px -2px 2px rgba(0, 0, 0, 0.8); */
  filter: drop-shadow(0.1em 0.1em rgba(0, 0, 0, 0.8));
  margin: 32px;
`;

export const Goldp = styled.p`
  background: var(--gold-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  /* text-shadow: -2px -2px 2px rgba(0, 0, 0, 0.8); */
  filter: drop-shadow(0.1em 0.1em rgba(0, 0, 0, 0.8));
  padding: 32px;
  opacity: 88%;
`;
