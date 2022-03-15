import React from "react";

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
    <div class="content">
    <div class="profileCard">
      <div class="topBlock">
        <div class="banner"></div>
        <div class="profilePic"></div>
        <div class="profileDetails">
          <div><span class="header">Victor Crest</span><span class="age">26</span></div>
          <p class="text1">London</p>
        </div>
      </div>
      <div class="bottomBlock">
        <div class="smallContainer">
          <h1 class="header">80K</h1>
          <p class="text1">Followers</p>
        </div>
        <div class="smallContainer">
          <h1 class="header">803K</h1>
          <p class="text1">Likes</p>
        </div>
        <div class="smallContainer">
          <h1 class="header">1.4K</h1>
          <p class="text1">Photos</p>
        </div>
      </div>
    </div>
  </div>
  );
}
