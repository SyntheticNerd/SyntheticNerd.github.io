import styled from "styled-components";

export const ArtCont = styled.div`
  width: 100%;
  position: relative;
  padding: 32px 0px;
`;
export const DeskCont = styled.div`
  position: relative;
  width: 95%;
  background: white;
  border-radius: 2%/3%;
  overflow: hidden;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
`;
export const TaskBar = styled.div`
  background: var(--headerBlue);
  display: flex;
  align-items: center;
  padding: ${({ mobile }) => (mobile ? `2%` : `0%`)};
  margin-bottom: ${({ mobile }) => (mobile ? `12%` : `5%`)};
`;
export const SearchBar = styled.div`
  width: ${({ mobile }) => (mobile ? `35%` : `25%`)};
  background: var(--prevGrey);
  border-radius: 4px;
  margin-left: 8%;
  padding: ${({ mobile }) => (mobile ? `3.5%` : `1.5%`)};
  height: fit-content;
`;
export const Sandwich = styled.div`
  margin: 2% 8% 2% auto;
  width: ${({ mobile }) => (mobile ? `10%` : `5%`)};
`;

export const Line = styled.div`
  padding: 5%;
  background-color: var(--prevGrey);
  margin: 1px;
  margin: 10%;
  border-radius: 2px;
`;
export const BriefBox = styled.div`
  display: flex;
  align-items: center;
  display: flex;
  align-content: center;
  margin-bottom: 5%;
  padding: ${({ mobile }) => (mobile ? `0% 7%` : `0%`)};
`;
export const ProfilePic = styled.div`
  background: var(${({ gradient }) => `--grad${gradient}`});
  border-radius: 50%;
  margin: 0px 6%;
  padding: ${({ mobile }) => (mobile ? `5%` : `5%`)};
`;
export const TextBox = styled.div`
  width: ${({ mobile }) => (mobile ? `60%` : `41%`)};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const Head1 = styled.h1`
  width: 32%;
  background-color: var(--prevGrey);
  border-radius: 4px;
  padding: 2.5%;
  margin-bottom: 3%;
`;
export const Para1 = styled.p`
  width: 100%;
  background-color: var(--prevGrey);
  border-radius: 4px;
  padding: 1%;
  margin-bottom: 2%;
`;
export const Para2 = styled.p`
  width: 90%;
  background-color: var(--prevGrey);
  border-radius: 4px;
  padding: 1%;
  margin-bottom: 2%;
`;
export const Para3 = styled.p`
  width: 80%;
  background-color: var(--prevGrey);
  border-radius: 4px;
  padding: 1%;
  margin-bottom: 2%;
`;
export const AddIcon = styled.div`
  display: ${({ mobile }) => (mobile ? `none` : `flex`)};
  margin-left: 5%;
  flex-grow: 1;
`;
export const Icon = styled.div`
  background-color: var(--iconGrey);
  border-radius: 50%;
  padding: 6%;
  margin: 2%;
`;

//mobile styles start here

export const MobCont = styled.div`
  position: relative;
  height: fit-content;
  width: 30%;
  background: white;
  border-radius: 4%/2%;
  overflow: hidden;
  padding-bottom: 2%;
  margin-top: -35%;
  margin-left: 70%;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
`;


