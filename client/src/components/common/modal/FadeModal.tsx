import React, { ReactElement, ReactNode } from "react";
import * as S from './styles/FadeModal.styled';
import {AnimatePresence} from "framer-motion";


interface FadeModalProps {
  isOpen: boolean;
  showClose?: boolean;
  outClickEvent?: (e: React.MouseEvent) => void;
  onCloseModal: () => void;
  outClick?: boolean;
  ele: any;
  maxWidth?: number;
  children: ReactNode;
}

export const FadeModal = (props: FadeModalProps): ReactElement => {
  const { isOpen, showClose, outClick = true, ele, maxWidth, children } = props;
  const { onCloseModal, outClickEvent } = props;

  return (
    <AnimatePresence>
      {isOpen && (
        <S.ModalLayout
          key={"fade-modal"}
          onClick={outClick ? outClickEvent : () => {}}
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <S.ModalContainer>
            <S.ModalBody ref={ele} $showClose={showClose} $maxWidth={maxWidth}>
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
      )}
    </AnimatePresence>
  );
};
