import { useNavigate, useParams } from "react-router-dom";
import { useRef } from "react";

export default function Modal(props) {
  let navigate = useNavigate();
  let btnRef = useRef(null);
  function onClose() {
    navigate("/portfolio");
  }

  return (
    <>
      <button onClick={() => onClose()}>Close</button>
      <div>{props.children}</div>
    </>
  );
}
