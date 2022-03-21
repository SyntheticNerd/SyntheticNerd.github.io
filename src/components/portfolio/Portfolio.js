import { Outlet, useParams } from "react-router-dom";
import Modal from "../Modal";
import FrontEndDev from "./projects/front-end-dev-16/FrontEndDev";
import { useEffect } from "react";
import Magic8Ball from "./projects/magic-8-ball/Magic8Ball";

export default function Portfolio() {
  const params = useParams();
  useEffect(() => {
    // console.log(params);
  }, [params]);
  return (
    <>
      <FrontEndDev />
      <Modal openModal={false}>
        <Outlet />
      </Modal>
      <Magic8Ball />
    </>
  );
}
