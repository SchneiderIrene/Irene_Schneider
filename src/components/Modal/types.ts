import { ReactNode } from "react";

export interface ModalProps {
    isOpen: boolean;
    children?: ReactNode;
    onClose: () => void;
    rotate?: boolean;
    backgroundImage?: string;
  }
