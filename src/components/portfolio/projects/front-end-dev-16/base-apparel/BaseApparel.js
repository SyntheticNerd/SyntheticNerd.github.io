import {
  BALandingPage,
  CallToAction,
  Center,
  ComingSoon,
  EmailInput,
  HBrand,
  HeroImg,
  HMain,
  Logo,
  Para,
  SubmitBtn,
} from "./BaseApparelStyle";

import { useState, useEffect, useRef } from "react";

export default function BaseApparel() {
  const [email, setEmail] = useState("");
  const [valid, setValid] = useState(true);
  const emailField = useRef(null);
  useEffect(() => {
    emailField.current.checkValidity() !== valid &&
      setValid(emailField.current.checkValidity());
  }, [valid, email]);
  return (
    <>
      <BALandingPage>
        <ComingSoon
          backgroundImg={
            process.env.PUBLIC_URL +
            "/dev16Images/base-apparel-images/bg-pattern-desktop.svg"
          }
        >
          <Logo
            src={process.env.PUBLIC_URL + "/dev16Images/base-apparel-images/logo.svg"}
            alt='Base Apparel'
          />
          <HeroImg
            backgroundImgDesk={
              process.env.PUBLIC_URL + "/dev16Images/base-apparel-images/hero-desktop.jpg"
            }
            backgroundImgMob={
              process.env.PUBLIC_URL + "/dev16Images/base-apparel-images/hero-mobile.jpg"
            }
          />
          <Center>
            <HBrand>We're</HBrand>
            <HMain>coming soon</HMain>
            <Para>
              Hello fellow shoppers! We're currently building our new fashion
              store. Add your email below to stay up-to-date with announcements
              and our launch deals.
            </Para>
          </Center>
          <CallToAction
            errorImg={
              process.env.PUBLIC_URL + "/dev16Images/base-apparel-images/icon-error.svg"
            }
            validState={valid}
          >
            <EmailInput
              type='email'
              placeholder='Email Address'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              ref={emailField}
              validState={valid}
            ></EmailInput>
            <SubmitBtn>
              <img
                src={
                  process.env.PUBLIC_URL + "/dev16Images/base-apparel-images/icon-arrow.svg"
                }
                alt='Submit'
              />
            </SubmitBtn>
          </CallToAction>
        </ComingSoon>
      </BALandingPage>
    </>
  );
}
