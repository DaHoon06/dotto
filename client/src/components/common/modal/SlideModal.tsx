import React, { ReactElement, ReactNode } from "react";
import { AnimatePresence } from "framer-motion";
import * as S from "./styles/SlideModal.styled";

interface SlideModalProps {
  isOpen: boolean;
  showClose?: boolean;
  outClickEvent?: (e: React.MouseEvent) => void;
  onCloseModal: () => void;
  outClick?: boolean;
  ele: any;
  maxWidth?: number;
  children: ReactNode;
}

export const SlideModal = (props: SlideModalProps): ReactElement => {
  const { isOpen, showClose, outClick = true, ele, maxWidth, children } = props;
  const { onCloseModal, outClickEvent } = props;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <S.BackgroundOverlay
            key="background-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          />
          <S.ModalLayout onClick={outClick ? outClickEvent : () => {}}>
            <S.ModalContainer
              key="slide-modal"
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ stiffness: 300 }}
            >
              <S.ModalBody
                ref={ele}
                $showClose={showClose}
                $maxWidth={maxWidth}
              >
                {!!showClose && (
                  <S.ModalCloseButtonWrapper>
                    <button
                      type={"button"}
                      aria-label={"modal-close-button"}
                      onClick={onCloseModal}
                    >
                      X
                    </button>
                  </S.ModalCloseButtonWrapper>
                )}
                <S.ModalContentsBox ref={ele}>{children}</S.ModalContentsBox>
              </S.ModalBody>
            </S.ModalContainer>
          </S.ModalLayout>
        </>
      )}
    </AnimatePresence>
  );
};
