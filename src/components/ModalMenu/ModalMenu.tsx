import { FC } from 'react';
import { ModalProps } from './types';
import { ModalOverlay, ModalContent} from './styles';

const ModalMenu: FC<ModalProps> = ({ isOpen, children, onClose}) => {
  if (!isOpen) {
    return null;
  }

  return (
    <ModalOverlay onClick={onClose} >
      <ModalContent onClick={(e)=>{ e.stopPropagation()}}>
         {children}
      </ModalContent>
    </ModalOverlay>
  );
};

export default ModalMenu;