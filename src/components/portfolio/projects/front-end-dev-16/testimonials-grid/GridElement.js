import { FullQuote, GridChild, InfoContainer, MainQuote, MainText, Name, Position, ProfileInfo, ProfilePic, SubText } from "./TestimonialGridStyle";

export default function GridElement({ testimony, index }) {
  console.log(index);
  return (
    <GridChild section={index}>
      <ProfileInfo>
        <ProfilePic src={process.env.PUBLIC_URL + testimony.imgUrl}/>
        <InfoContainer>
          <Name>{testimony.name}</Name>
          <Position>{testimony.title}</Position>
        </InfoContainer>
      </ProfileInfo>
      <MainQuote>
        <MainText>{testimony.mainQuote}</MainText>
      </MainQuote>
      <FullQuote>
        <SubText>{testimony.fullQuote}</SubText>
      </FullQuote>
    </GridChild>
  );
}
