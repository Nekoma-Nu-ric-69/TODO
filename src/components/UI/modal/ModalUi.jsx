import React from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

export const ModalUi = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  return createPortal(
    <StyledModalContainer onClick={onClose}>
      <StyledContent onClick={(e) => e.stopPropagation()}>
        {children}
      </StyledContent>
    </StyledModalContainer>,
    document.getElementById("modal")
  );
};

const StyledModalContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: #66666699;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
`;

const StyledContent = styled.div`
  padding: 30px;
  background: white;
  border-radius: 10px;
`;
