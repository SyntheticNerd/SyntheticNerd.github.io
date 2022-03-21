import styled from "styled-components";

export const M8BSection = styled.div`
  --background: #101010;
  --nmShadow1: rgba(7, 7, 7, 1);
  --nmShadow2: rgba(62, 62, 62, 0.5);
  --elev1dp: rgba(30, 30, 30, 1);

  --textColorPrimary: rgba(255, 255, 255, 0.8);
  --textColorSecondary: rgba(255, 255, 255, 0.5);
  --textColorEnabled: rgba(130, 250, 100, 0.8);
  --textColorEnabledHover: rgba(130, 250, 70, 1);
  --textColorDisabled: rgba(250, 50, 50, 0.5);
  --textColorDisabledHover: rgba(250, 50, 0, 0.8);

  color: var(--textColorPrimary);
  background-color: var(--background);
  width: 70vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  margin: auto;
`;
export const AnimBtn = styled.div`
  height: auto;
  padding-right: 2em;
  margin-bottom: 2em;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  right: min(20px, 300px);
`;
export const CollapseDoc = styled.div`
  position: relative;
  /* top: -2.5em; */
  height: auto;
  /* padding-top: 3.5em; */
  padding-left: 6em;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  right: 32px;
  z-index: 3;
`;
export const M8B = styled.div`
  width: 100%;
  max-width: 500px;
  height: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;
export const Ball = styled.div`
  margin-top: 3em;
  height: auto;
  width: min(50%, 300px);
  animation: float 6s ease-in-out infinite;
`;
export const Shadow = styled.div`
  transform: translateY(-10%) perspective(20px) rotateX(6deg) scale(1, 0.4);
  /* position: absolute; */
  width: 50%;
  height: 30vh;
  bottom: 0;
  background-color: black;
  border-radius: 50%;
  background: radial-gradient(
    rgba(0, 0, 0, 0.5) 0px,
    transparent min(50%, 300px)
  );
  pointer-events: none;

  animation: pulse 6s ease-in-out infinite;
`;
export const Question = styled.form`
  width: 100vw;
  position: relative;
  display: flex;
  top: -10vh;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;
export const Submit = styled.div`
  transform: translate(-4em, 3em);
`;
