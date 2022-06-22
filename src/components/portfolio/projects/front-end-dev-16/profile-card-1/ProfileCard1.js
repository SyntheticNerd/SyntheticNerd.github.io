import React from "react";
import { Banner, BottomBlock, Content, Header, ProfileCard, ProfileDetails, ProfilePic, SmallContainer, Text1, TopBlock } from "./ProfileCardStyle";

const victor = {
  fName: "Victor",
  lName: "Crests",
  age: 26,
  city: "London",
  followers: "80K",
  likes: "803K",
  photos: "1.4K"
}

export default function ProfileCard1() {
  return (
    <Content>
    <ProfileCard>
      <TopBlock>
        <Banner></Banner>
        <ProfilePic src={process.env.PUBLIC_URL + "/dev16Images/profile-card-images/image-victor.jpg"} alt={victor.fName + ' ' + victor.lName} />
        <ProfileDetails>
          <Header>Victor Crest<span>26</span></Header>
          <Text1>London</Text1>
        </ProfileDetails>
      </TopBlock>
      <BottomBlock>
        <SmallContainer>
          <Header>80K</Header>
          <Text1>Followers</Text1>
        </SmallContainer>
        <SmallContainer>
          <Header>803K</Header>
          <Text1>Likes</Text1>
        </SmallContainer>
        <SmallContainer>
          <Header>1.4K</Header>
          <Text1>Photos</Text1>
        </SmallContainer>
      </BottomBlock>
    </ProfileCard>
  </Content>
  );
}
