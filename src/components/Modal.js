import { useNavigate, useParams } from "react-router-dom";
import { useRef, useState } from "react";
import { ModalBox } from "./StyledComponents";

export default function Modal({ modal, setModal, children }) {
  // const [open, setOpen] = useState(modal ? modal : false);
  let navigate = useNavigate();
  let btnRef = useRef(null);

  function onClose() {
    setModal(false);
    navigate("/portfolio");
  }

  return (
    <ModalBox open={modal}>
      <div>
        <button onClick={() => onClose()}>Close</button>
        {children}
      </div>
    </ModalBox>
  );
}
