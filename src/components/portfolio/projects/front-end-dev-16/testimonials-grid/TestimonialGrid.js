import React from "react";
import { Content, GridContainer } from "./TestimonialGridStyle";
import GridElement from "./GridElement";
import { GridContext } from "./GridContext";
import { useContext } from "react";

export default function TestimonialGrid() {
  const { testimonials } = useContext(GridContext);
  return (
    <Content>
      <GridContainer>
        <GridContext.Consumer testimonials={{ testimonials }}>
          {(testimonials) =>
            testimonials.map((testimony, index) => {
              return <GridElement key={index} index={index} testimony={testimony} />;
            })
          }
        </GridContext.Consumer>
      </GridContainer>
    </Content>
  );
}
