import { useParams } from "react-router-dom";
import FrontEndDev from "./projects/front-end-dev-16/FrontEndDev";
import { useEffect, useState } from "react";
import Magic8Ball from "./projects/magic-8-ball/Magic8Ball";
import { PortfolioPage } from "./projects/PortfolioStyles";
import TetrisProject from "./projects/tetris/TetrisProject";

export default function Portfolio() {
  const [modal, setModal] = useState(false);
  const { projectId } = useParams();
  useEffect(() => {
    console.log(projectId);
    projectId && setModal(true);
    !projectId && setModal(false);
  }, [projectId]);
  return (
    <PortfolioPage modal={modal}>
      <FrontEndDev modal={modal} setModal={setModal} projectId={projectId} />
      <TetrisProject />
      <Magic8Ball />
    </PortfolioPage>
  );
}
