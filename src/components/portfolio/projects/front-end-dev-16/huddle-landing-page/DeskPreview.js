import React from "react";
import { DeskCont, Sandwich, SearchBar, TaskBar, Line } from "./CSSArtStyle";
import Brief from "./Brief";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

let colorArr = [];

for (let i = 3; i <= 5; i++){
  colorArr.push(<Brief key={i} gradient={i%3+1}/>)
}
console.log(colorArr);

const DeskPreview = () => {
  return (
    <>
      <DeskCont>
        <TaskBar>
          <SearchBar/>

     
          <Sandwich>
            <Line/>
            <Line/>
            <Line/>
          </Sandwich>
        </TaskBar>
        {colorArr}
      </DeskCont>
    </>
  );
};

export default DeskPreview;
