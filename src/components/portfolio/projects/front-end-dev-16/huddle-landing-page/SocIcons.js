import React from "react";
import { FooterCont, SocLink } from "./HuddleStyleComp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
const SocIcons = () => {
  return (
    <FooterCont>
      <SocLink href='#'>
        <FontAwesomeIcon icon={faFacebookF} color='white' size='lg' />
      </SocLink>
      <SocLink href='#'>
        <FontAwesomeIcon icon={faTwitter} color='white' size='lg' />
      </SocLink>
      <SocLink href='#'>
        <FontAwesomeIcon icon={faInstagram} color='white' size='lg' />
      </SocLink>
    </FooterCont>
  );
};

export default SocIcons;
