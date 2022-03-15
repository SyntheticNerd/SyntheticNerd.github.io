import {
  NavBarCont,
  NavFolder,
  LinkList,
  IconsList,
  LinkCont,
  NavLink,
  NavIcon,
  SandwichIcon,
  Line1,
  Line2,
  Line3,
  TabIndicator,
  LogoIcon,
} from "./NavStyle";
import { ReactComponent as LinkedinIcon } from "../../icons/linkedinIcon.svg";
import { ReactComponent as BehanceIcon } from "../../icons/behanceIcon.svg";
import { ReactComponent as GithubIcon } from "../../icons/gitHubIcon.svg";
import { ReactComponent as BlankIcon } from "../../icons/blankIcon.svg";
import { ReactComponent as LanternIcon } from "../../icons/lantern_icon_gold_elipse.svg";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";


export default function Nav() {
  const [navModal, setNavModal] = useState(false);
  let navigate = useNavigate();
  let location = useLocation();

  ////tests for over flow parents
  // useEffect(()=>{
  //   let parent = document.querySelector(".navBarTest").parentElement && document.querySelector(".navBarTest").parentElement;
  //   console.log(parent);
  //    while (parent) {
  //     const hasOverflow = getComputedStyle(parent).overflow;
  //     console.log(hasOverflow);
  //     if (hasOverflow !== "visible") {
  //       console.log(hasOverflow, parent);
  //     }
  //     parent = parent.parentElement;
  //   }
  // })
  
  return (
    <NavBarCont className='navBarTest' navModal={navModal}>
        <LogoIcon>
          <LanternIcon style={{ height: "100%", scale: "1.3" }} />
        </LogoIcon>

        <NavFolder>
          <LinkList navModal={navModal}>
            <LinkCont>
              <NavLink onClick={() => navigate("/")}>
                Home
                <TabIndicator
                  currentTab={location.pathname === "/" ? true : false}
                />
              </NavLink>
            </LinkCont>
            <LinkCont>
              <NavLink onClick={() => navigate("/portfolio")}>
                Portfolio
                <TabIndicator
                  currentTab={
                    location.pathname.includes("portfolio") ? true : false
                  }
                />
              </NavLink>
            </LinkCont>
            <LinkCont>
              <NavLink onClick={() => navigate("/about")}>
                About
                <TabIndicator
                  currentTab={
                    location.pathname.includes("about") ? true : false
                  }
                />
              </NavLink>
            </LinkCont>
            <LinkCont>
              <NavLink onClick={() => navigate("/contact")}>
                Contact
                <TabIndicator
                  currentTab={
                    location.pathname.includes("contact") ? true : false
                  }
                />
              </NavLink>
            </LinkCont>
          </LinkList>
          <IconsList>
            <LinkCont>
              <NavIcon
                href='https://www.linkedin.com/in/andrew-schroepfer/'
                target='_blank'
              >
                <LinkedinIcon />
              </NavIcon>
            </LinkCont>
            <LinkCont>
              <NavIcon href='https://www.behance.net/andrewsch' target='_blank'>
                <BehanceIcon />
              </NavIcon>
            </LinkCont>
            <LinkCont>
              <NavIcon
                href='https://github.com/SyntheticDesigner'
                target='_blank'
              >
                <GithubIcon />
              </NavIcon>
            </LinkCont>
            <LinkCont>
              <SandwichIcon
                onClick={() => {
                  setNavModal(!navModal);
                }}
              >
                <BlankIcon />
                <Line1 navModal={navModal} />
                <Line2 navModal={navModal} />
                <Line3 navModal={navModal} />
              </SandwichIcon>
            </LinkCont>
          </IconsList>
        </NavFolder>
    </NavBarCont>
  );
}
