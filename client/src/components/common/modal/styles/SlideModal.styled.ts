import styled from "styled-components";
import {motion} from "framer-motion";

export const BackgroundOverlay = styled(motion.div)`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 10; // Ensure it is below the modal
`;

export const ModalLayout = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-end; // Start from the right
    align-items: center;
    z-index: 20; // Ensure it is above the background
`;

export const ModalContainer = styled(motion.div)`
    position: relative;
    width: ${({ $maxWidth }) => $maxWidth || 400}px;
    background-color: white;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const ModalBody = styled.div`
    position: relative;
    padding: 20px;
    width: 100%;
    box-sizing: border-box;
`;

export const ModalCloseButtonWrapper = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;
`;

export const ModalContentsBox = styled.div`
    width: 100%;
    height: 100%;
    overflow-y: auto;
`;

