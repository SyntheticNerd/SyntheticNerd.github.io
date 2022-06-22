import React from "react";
import {
  SinglePriceCont,
  SignUpBanner,
  FlexCont,
} from "./SinglePriceStyledComp";
import MonthlySub from "./MonthlySub";
import WhyUs from "./WhyUs";
import JoinUs from "./JoinUs";

export default function SinglePriceGrid() {
  return (
    <div>
      <SinglePriceCont>
        <SignUpBanner>
          <JoinUs />
          <FlexCont>
            <MonthlySub />
            <WhyUs />
          </FlexCont>
        </SignUpBanner>
      </SinglePriceCont>
    </div>
  );
}
