import styled from "styled-components";
import { ToastContainer, ToastOptions } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ToastHandler = styled(ToastContainer)`
  .Toastify__toast-container {
    z-index: 99999 !important;
  }

  .Toastify__toast {
    background-color: #ededed;
    color: #fff;
    border: 1px solid transparent;
    font-size: 14px;
  }

  .Toastify__toast--info {
    background-color: #c6edda;
    color: #fff;
  }

  .Toastify__toast--success {
    background-color: black;
  }

  .Toastify__toast--error {
    background-color: #ededed;
  }
`;

export const defaultToastOption: ToastOptions = {
  position: "top-right",
  autoClose: 2000,
  hideProgressBar: true,
  closeOnClick: true,
  draggable: true,
  pauseOnHover: false,
  closeButton: false,
};
