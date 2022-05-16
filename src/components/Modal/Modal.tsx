import { useEffect, FC } from 'react';
import { createPortal } from 'react-dom';
import { ReactComponent as XMarkIcon } from 'assets/x-mark.svg';
import {
  CloseModalButton,
  ModalBody,
  ModalContainer, ModalFooter,
  ModalHeader,
  Overlay
} from './styled';
import { ModalProps } from './types';
import { lockScroll, unlockScroll } from './utils';

export const Modal: FC<ModalProps> = ({ closeModal, children, footer }) => {
  const modalRoot = document.getElementById('modal-root');

  useEffect(() => {
    lockScroll();

    return unlockScroll;
  })

  if (!modalRoot) {
    return null;
  }

  return createPortal(
    <Overlay>
      <ModalContainer>
        <ModalHeader>
          <CloseModalButton size={16} color="#939090" onClick={closeModal}>
            <XMarkIcon />
          </CloseModalButton>
        </ModalHeader>

        <ModalBody>{children}</ModalBody>

        {!!footer && <ModalFooter>{footer}</ModalFooter>}
      </ModalContainer>
    </Overlay>,
    modalRoot
  );
};
