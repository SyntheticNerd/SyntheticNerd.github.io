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
    <div className="content">
    <div className="profileCard">
      <div className="topBlock">
        <div className="banner"></div>
        <div className="profilePic"></div>
        <div className="profileDetails">
          <div><span className="header">Victor Crest</span><span className="age">26</span></div>
          <p className="text1">London</p>
        </div>
      </div>
      <div className="bottomBlock">
        <div className="smallContainer">
          <h1 className="header">80K</h1>
          <p className="text1">Followers</p>
        </div>
        <div className="smallContainer">
          <h1 className="header">803K</h1>
          <p className="text1">Likes</p>
        </div>
        <div className="smallContainer">
          <h1 className="header">1.4K</h1>
          <p className="text1">Photos</p>
        </div>
      </div>
    </div>
  </div>
  );
}
