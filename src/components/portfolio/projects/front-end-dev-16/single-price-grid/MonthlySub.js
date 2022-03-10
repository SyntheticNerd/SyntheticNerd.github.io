import React from "react";
import {
  Cont,
  Header2,
  Price,
  SpanStd,
  SignUpBtn,
  ParaStd,
} from "./SinglePriceStyledComp";

export default function MonthlySub() {
  return (
    <Cont bgColor='var(--brand-act)'>
      <Header2>Monthly Subscription</Header2>
      <div style={{ marginBottom: "1em" }}>
        <div>
          <Price>$29</Price>
          <SpanStd>per month</SpanStd>
        </div>
        <ParaStd>Full access for less than $1 a day</ParaStd>
      </div>

      <SignUpBtn>Sign Up</SignUpBtn>
    </Cont>
  );
}
