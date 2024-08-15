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
import useModalStore, { ModalType } from "./store/modalStore";
import { FadeModal } from "./FadeModal";
import { SlideModal } from "@components/common/modal/SlideModal";

export enum ModalAnimation {
  FADE = "fade",
  SLIDE = "slide",
}

interface ModalHandlerProps extends PropsWithChildren {
  outerClick?: boolean;
  modalType: ModalType;
  animation?: ModalAnimation;
}

interface ModalAnimationTypeProps {
  children: ReactNode;
}

export const ModalHandler = (props: ModalHandlerProps) => {
  const { children, outerClick, modalType, animation } = props;
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
      return <ModalAnimationType>{children}</ModalAnimationType>;
    },
    [type, outerClick]
  );

  const ModalAnimationType = ({
    children,
  }: ModalAnimationTypeProps): ReactElement => {
    switch (animation) {
      case ModalAnimation.SLIDE:
        return (
          <SlideModal
            ele={ele}
            outClick={outerClick}
            isOpen={isOpen && modalType === type}
            outClickEvent={outerClickEvent}
            onCloseModal={onRequestClose}
          >
            {children}
          </SlideModal>
        );
      default:
        return (
          <FadeModal
            ele={ele}
            outClick={outerClick}
            isOpen={isOpen && modalType === type}
            outClickEvent={outerClickEvent}
            onCloseModal={onRequestClose}
          >
            {children}
          </FadeModal>
        );
    }
  };

  if (!element) return <></>;
  else return <>{ReactDOM.createPortal(modalHandler(children), element)}</>;
};
