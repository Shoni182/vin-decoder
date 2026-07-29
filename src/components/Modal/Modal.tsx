import styles from "./Modal.module.css";
import { createPortal } from "react-dom";
import { useEffect } from "react";

interface ModalProps {
  children: React.ReactNode;
  close: () => void;
}

function Modal({ children, close }: ModalProps) {
  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      close();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        close();
      }
    };
    document.removeEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "";
  }, [close]);

  return createPortal(
    <div
      className={styles.backdrop}
      role="dialog"
      aria-modal="true"
      onClick={handleBackdropClick}
    >
      <div className={styles.modal}>{children}</div>
    </div>,
    document.getElementById("modal-root") as HTMLDivElement,
  );
}

export default Modal;
