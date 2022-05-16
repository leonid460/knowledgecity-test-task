import styled from 'styled-components';
import { IconContainer } from 'components/IconContainer';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.2);
`;

export const ModalContainer = styled.div`
  width: 700px;
  overflow: hidden;
  border-radius: 6px;
  background: white;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 8px;
`;

export const CloseModalButton = styled(IconContainer)`
  padding: 4px;
  border-radius: 4px;
  cursor: pointer;
  
  &:hover {
    background: rgba(236, 141, 61, 0.25);
  }
`;

export const ModalBody = styled.div`
  padding: 0 24px 24px 24px;
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 8px 40px;
`;
