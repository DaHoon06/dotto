import styled from "styled-components";
import { motion } from "framer-motion";

export const ModalLayout = styled(motion.div)`
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 428px; //todo mobile viewport에 맞춰 변경
  display: flex;
  align-items: center;
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  z-index: 9999;
`;

export const ModalBody = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white000};
  width: 100%;
  min-height: 300px;
  height: auto;
  border-radius: 20px 20px 0 0;
  box-shadow: 0 0 16px rgb(50 50 50 / 12%);
`;
