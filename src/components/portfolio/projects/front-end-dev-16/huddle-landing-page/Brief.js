import React from "react";
import {
  BriefBox,
  Head1,
  Icon,
  Para1,
  Para3,
  Para2,
  ProfilePic,
  AddIcon,
  TextBox,
} from "./CSSArtStyle";

const Brief = ({ gradient, mobile }) => {
  return (
    <BriefBox mobile={mobile}>
      <ProfilePic gradient={gradient} mobile={mobile}/>
      <TextBox mobile={mobile}>
        <Head1 />
        <Para1 />
        <Para2 />
        <Para3 />
      </TextBox>
      <AddIcon mobile={mobile}>
        <Icon />
        <Icon />
        <Icon />
        <Icon />
        <Icon />
      </AddIcon>
    </BriefBox>
  );
};

export default Brief;
