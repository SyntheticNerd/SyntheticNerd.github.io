import styled from "styled-components";

export const Content = styled.div`
  flex-grow: 1;
  width: 100%;
`;
export const ProfileCard = styled.div`
  width: 400px;
  /* height: 375px; */
  max-width: 80vw;
  margin: auto;
  margin-top: 32px;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.3);
  border-radius: 16px;
  overflow: hidden;
  background-color: white;
`;
export const TopBlock = styled.div`
  position: relative;
  height: 300px;
`;
export const Banner = styled.div`
  height: 50%;
  background: url(${process.env.PUBLIC_URL + "/profile-card-images/bg-pattern-card.svg"})
    center/100%;
`;
export const ProfilePic = styled.img`
  height: 8em;
  width: 8em;
  border-radius: 50%;
  border: 4px solid white;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
export const ProfileDetails = styled.div`
  margin-top: 6em;
  text-align: center;
`;
export const Header = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.8);
  & > span {
    font-size: 1.5rem;
    margin-left: 1rem;
    font-weight: medium;
    color: rgba(0, 0, 0, 0.4);
  }
`;
export const Text1 = styled.p`
  font-size: 0.9rem;
  color: rgba(0, 0, 0, 0.4);
  margin-top: 8px;
`;
export const BottomBlock = styled.div`
  margin-top: 32px;
  display: flex;
  justify-content: space-around;
  height: 87px;
  border-top: 1px solid rgba(0, 0, 0, 0.3);
`;
export const SmallContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
