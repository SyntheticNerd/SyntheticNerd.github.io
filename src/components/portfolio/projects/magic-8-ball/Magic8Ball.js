import React, { useState, useEffect } from "react";
import { FlexRow, Goldh1, SectionTitle } from "../../../StyledComponents";
import {
  AnimBtn,
  Ball,
  CollapseDoc,
  M8B,
  M8BArticle,
  M8BFrame,
  M8BSection,
  Question,
  Shadow,
  Submit,
} from "./M8BStyle";

import { JSBurgerMenu } from "./vanillaComponents/burgerMenu";
import { GridDoc, JSTableMaker } from "./vanillaComponents/gridDoc";
import { JSInput } from "./vanillaComponents/inputMaker";
import { JSCheckBox, JSSubmitBtn } from "./vanillaComponents/checkBox";

Date.prototype.today = function () {
  return (
    (this.getDate() < 10 ? "0" : "") +
    this.getDate() +
    "/" +
    (this.getMonth() + 1 < 10 ? "0" : "") +
    (this.getMonth() + 1) +
    "/" +
    this.getFullYear()
  );
};

// For the time now
Date.prototype.timeNow = function () {
  return (
    (this.getHours() < 10 ? "0" : "") +
    this.getHours() +
    ":" +
    (this.getMinutes() < 10 ? "0" : "") +
    this.getMinutes()
  ); // + ":" + ((this.getSeconds() < 10) ? "0" : "") + this.getSeconds();
};

function randomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

class MagicBall {
  constructor(_element, _index) {
    this.element = _element;
    this.index = _index;
    this.id = "magicball" + this.index;
    this.img = document.createElement("img");
    this.src =
      process.env.PUBLIC_URL + `/m8b-images/magic8ball_${this.index}.png`;
  }
  draw() {
    this.element.appendChild(this.img);
    this.img.setAttribute("id", this.id);
    document.getElementById(this.id).src = this.src;
    this.style();
  }
  reDraw() {
    document.getElementById(this.id).src = this.src;
  }
  style() {
    // this.img.style.position = "absolute";
    this.img.style.height = "100%";
    this.img.style.width = "100%";
    this.img.style.zIndex = "1";
  }
}

let answerArray = [
  "It is certain",
  "It is decidedly so",
  "Without a doupt",
  "Yes, definately",
  "You may rely on it",
  "As I see it, yes",
  "Most likely",
  "Outlook good",
  "Yes",
  "Signs point to yes",
  "Reply hazy try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Dont count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful",
];

function Magic8Ball() {
  return (
    <M8BSection>
      <FlexRow>
        <M8BFrame
          src='https://codesandbox.io/embed/magic-8-ball-iocyf?codemirror=1&fontsize=12&theme=dark&view=preview'
          title='Magic 8 Ball'
          allow='accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking'
          sandbox='allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts'
        ></M8BFrame>
        <M8BArticle>
          <Goldh1>MAGIC 8 BALL</Goldh1>
          <p>Ask a yes or no Question and the Ball will determine your fate.</p>
          <p>
            This project is made with 7 Vanilla Java Script classes. CSS is used
            primarily to position elements in the page. Most styling is done in
            the JS. Each class component is modular in order to add these
            components to future projects. They can be added and attached to
            HMTL elements Dynamically and then positioned using CSS.
          </p>
          <p>
            Creating the collapsable modal for the sandwich icon was challenging
            in vanilla Java Script. Given further development I would refine the
            responsive nature of each component.
          </p>
          <p>
            When considering the Design and overall User Experience two features
            stand out. First is the dark theme. Dark themes while easy on the
            eyes can make readability a problem. I mitigate this by making the
            button glow when hovering. The Second is the floating animation.
            While animations are great for engaging a users attention they are a
            little too good and can be distracting. For this reason I include
            the ability to deactivate the animation.
          </p>
        </M8BArticle>
      </FlexRow>
    </M8BSection>
  );
}

export default Magic8Ball;
