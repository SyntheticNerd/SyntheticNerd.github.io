import { useNavigate, useParams } from "react-router-dom";
import { useRef, useState } from "react";
import { ChildWrapper, ModBox, ModBG, ModControls } from "./ModalStyles";

export default function Modal({ modal, setModal, children, homePage}) {
  // const [_modal, _setModal] = useState(modal ? modal : false);
  let navigate = useNavigate();
  let btnRef = useRef(null);

  function onClose() {
    setModal(false);
    navigate(homePage?homePage:"/portfolio");
  }

  return (
    <ModBox open={modal}>
      {/* <ModBG/> */}
      <ChildWrapper>{children}</ChildWrapper>
      <ModControls>
        <button onClick={() => onClose()}>Close</button>
      </ModControls>
    </ModBox>
  );
}
