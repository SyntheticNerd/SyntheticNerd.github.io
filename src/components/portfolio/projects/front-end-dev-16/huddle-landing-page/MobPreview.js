import React from "react";
import { MobCont, Sandwich, SearchBar, TaskBar, Line } from "./CSSArtStyle";
import Brief from "./Brief";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

let colorArr = [];

for (let i = 3; i <= 10; i++){
  colorArr.push(<Brief key={i} gradient={i%3+1} mobile={true}/>)
}
console.log(colorArr);

const MobPreview = () => {
  return (
    <>
      <MobCont>
        <TaskBar mobile={true}>
          <SearchBar mobile={true}/>
          <Sandwich mobile={true}>
            <Line/>
            <Line/>
            <Line/>
          </Sandwich>
        </TaskBar>
        {colorArr}
      </MobCont>
    </>
  );
};

export default MobPreview;
