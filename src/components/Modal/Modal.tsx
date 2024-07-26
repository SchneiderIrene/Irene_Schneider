import { FC } from 'react';
import { ModalProps } from './types';
import { ModalOverlay, ModalContent} from './styles';

const Modal: FC<ModalProps> = ({ isOpen, children, onClose, rotate = false, backgroundImage = '' }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <ModalOverlay onClick={onClose} >
      <ModalContent onClick={(e)=>{ e.stopPropagation()}} rotate={rotate} style={{backgroundImage: `url(${backgroundImage})`}}>
         {children}
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;