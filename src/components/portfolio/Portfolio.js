import { Outlet } from "react-router-dom";
import FrontEndDev from "./projects/front-end-dev-16/FrontEndDev";

export default function Portfolio() {
  return (
    <>
      <FrontEndDev />
      <Outlet />
    </>
  );
}
