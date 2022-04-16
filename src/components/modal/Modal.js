import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ChildWrapper, ModBox, ModBG } from "./ModalStyles";

export default function Modal({
  modal,
  setModal,
  children,
  top,
  bottom,
  left,
  right,
  width,
  height,
  zIndex,
  bgColor,
  bgImage,
  padding,
}) {
  // const [_modal, _setModal] = useState(modal ? modal : false);
  let navigate = useNavigate();

  function onClose() {
    setModal(false);
    navigate(-1);
  }

  return (
    <ModBox
      open={modal}
      top={top}
      bottom={bottom}
      left={left}
      right={right}
      width={width}
      height={height}
      zIndex={zIndex}
      bgColor={bgColor}
      bgImage={bgImage}
      padding={padding}
    >
      <ModBG
        onClick={() => onClose()}
        top={top}
        bottom={bottom}
        left={left}
        right={right}
        width={width}
        height={height}
      />
      <ChildWrapper>{children}</ChildWrapper>
    </ModBox>
  );
}
