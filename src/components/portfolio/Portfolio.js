import { Link, Outlet, useParams } from "react-router-dom";
import Modal from "../Modal";
import FrontEndDev from "./projects/front-end-dev-16/FrontEndDev";
import { useEffect, useState } from "react";
import Magic8Ball from "./projects/magic-8-ball/Magic8Ball";
import { PortfolioPage } from "./projects/PortfolioStyles";
import { FlexRow } from "../StyledComponents";
import TetrisProject from "./projects/tetris/TetrisProject";

export default function Portfolio() {
  const [modal, setModal] = useState(false);
  const params = useParams();
  useEffect(() => {
    console.log(params);
  }, [params]);
  return (
    <PortfolioPage>
      <TetrisProject/>
      <Magic8Ball />
      <FrontEndDev setModal={setModal}/>
      {/* <Modal modal={modal} setModal={setModal}> */}
      <Link to="/portfolio">Close</Link>
        <Outlet />
      {/* </Modal> */}
    </PortfolioPage>
  );
}
