import React from "react";
import { Cont, Header2, SpanStd } from "./SinglePriceStyledComp";

export default function WhyUs() {
  return (
    <Cont bgColor='var(--brand-pass)'>
      <Header2>Why Us</Header2>
      <ul style={{ listStyle: "none" }}>
        <li>
          <SpanStd>Tutorials by industry experts</SpanStd>
        </li>
        <li>
          <SpanStd>Peer &amp; expert code review</SpanStd>
        </li>
        <li>
          <SpanStd>Coding exercises</SpanStd>
        </li>
        <li>
          <SpanStd>Access to our GitHub repos</SpanStd>
        </li>
        <li>
          <SpanStd>Community forum</SpanStd>
        </li>
        <li>
          <SpanStd>Flashcard decks</SpanStd>
        </li>
        <li>
          <SpanStd>New videos every week</SpanStd>
        </li>
      </ul>
    </Cont>
  );
}
