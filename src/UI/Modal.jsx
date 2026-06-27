import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

function Modal({ open, children, onClose }) {
  const dialogRef = useRef();

  useEffect(() => {
    const modal = dialogRef.current;
    if (open) modal.showModal();

    return () => modal.close();
  }, [open]);
  return createPortal(
    <dialog ref={dialogRef} className="modal" onClose={onClose}>
      {children}
    </dialog>,
    document.getElementById("modal-root"),
  );
}

export default Modal;
