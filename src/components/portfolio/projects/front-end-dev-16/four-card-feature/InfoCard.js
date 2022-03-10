import React from "react";
import { CardCont, Text3, Text4, FeatureImg } from "./FourCardStyledComp";

export default function InfoCard({ borderColor, header, text, img }) {
  return (
    <CardCont borderColor={borderColor}>
      <Text3>{header}</Text3>
      <Text4>{text}</Text4>
      <FeatureImg
        src={process.env.PUBLIC_URL + img}
        alt='Supervisor Icon'
        className='main-img'
      />
    </CardCont>
  );
}
