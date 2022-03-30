import { useNavigate, useParams } from "react-router-dom";
import { useRef } from "react";
import { ModalBox } from "./StyledComponents";

export default function Modal(props) {
  let navigate = useNavigate();
  let btnRef = useRef(null);
  function onClose() {
    props.setModal(false)
    navigate("/portfolio");
  }

  return (
    <ModalBox>
      <div>
        <button onClick={() => onClose()}>Close</button>
        {props.children}
      </div>
    </ModalBox>
  );
}
