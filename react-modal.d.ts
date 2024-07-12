// react-modal.d.ts
declare module 'react-modal' {
  import * as React from 'react';

  interface ModalProps {
    isOpen: boolean;
    onRequestClose?: () => void;
    contentLabel?: string;
    ariaHideApp?: boolean;
    style?: {
      content?: React.CSSProperties;
      overlay?: React.CSSProperties;
    };
    children?: React.ReactNode;
  }

  export default class Modal extends React.Component<ModalProps> {}
}
