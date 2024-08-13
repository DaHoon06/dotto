import { PropsWithChildren, ReactElement } from "react";
import useModal from "@components/common/modal/hooks/useModal";
import { AnimatePresence } from "framer-motion";
import * as S from "@components/common/modal/styles/BottomSlideModal.styled";

interface BottomSlideModalProps extends PropsWithChildren {
  isOpen: boolean;
  ele: Element | any;
}

export const BottomSlideModal = ({
  isOpen,
  children,
  ele,
}: BottomSlideModalProps): ReactElement => {
  const { outerClickEvent } = useModal(ele);

  return (
    <AnimatePresence>
      {isOpen && (
        <S.ModalLayout
          key={"bottom-modal-key"}
          onClick={outerClickEvent}
          initial={{ opacity: 1 }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
        >
          <S.ModalBody
            initial={{ opacity: 1, y: 700 }}
            transition={{ ease: [0.17, 0.67, 0.83, 1] }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: 700,
            }}
          >
            <S.ModalContent ref={ele}>{children}</S.ModalContent>
          </S.ModalBody>
        </S.ModalLayout>
      )}
    </AnimatePresence>
  );
};
