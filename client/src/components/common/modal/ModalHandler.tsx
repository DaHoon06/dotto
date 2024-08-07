import {
  PropsWithChildren,
  ReactElement,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
} from "react";
import useModal from "./hooks/useModal";
import ReactDOM from "react-dom";
import {FadeModal} from "./FadeModal";
import useModalStore, { ModalType } from "./store/modalStore";

interface ModalHandlerProps extends PropsWithChildren {
  outerClick?: boolean;
  modalType: ModalType;
}

export const ModalHandler = (props: ModalHandlerProps) => {
  const { children, outerClick, modalType } = props;
  const { isOpen, type } = useModalStore();

  const ele = useRef<HTMLDivElement | null>(null);

  const { outerClickEvent, onRequestClose } = useModal(ele);

  const element =
    typeof window !== "undefined" &&
    (document.querySelector("#modal") as HTMLDivElement);

  useEffect(() => {
    const html = document.querySelector("html");
    if (html) {
      isOpen ? (html.style.overflow = "hidden") : (html.style.overflow = "");
    }
  }, [isOpen]);

  const modalHandler = useCallback(
    (children: ReactNode): ReactElement => {
      return (
        <>
          <FadeModal
            ele={ele}
            outClick={outerClick}
            isOpen={isOpen && modalType === type}
            outClickEvent={outerClickEvent}
            onCloseModal={onRequestClose}
          >
            {children}
          </FadeModal>
        </>
      );
    },
    [type, outerClick],
  );

  if (!element) return <></>;
  else return <>{ReactDOM.createPortal(modalHandler(children), element)}</>;
};
