import {
  ReactNode,
  useState,
} from "react";
import { IoClose } from "react-icons/io5";
import Modal from "react-modal";

type ModalProps = {
  title: string;
  previewIcon: boolean;
  children: ReactNode;
  setPreviewIcon: Function;
};

export function ModalComponent({
  title,
  previewIcon,
  children,
  setPreviewIcon,
}: ModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Modal
      ariaHideApp={false}
      closeTimeoutMS={500}
      isOpen={previewIcon}
      onRequestClose={() => setIsOpen(false)}
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        },
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          width: "25%",
          height: "50%",
          padding: "0",
          border: "none",
          borderRadius: "0",
        },
      }}
    >
      <div className="flex-col m-4">
        <div className="flex justify-end">
          <button onClick={() => setPreviewIcon(null)} type="button">
            <IoClose style={{ fontSize: "32px" }} />
          </button>
        </div>
        {children}
      </div>
    </Modal>
  );
}
