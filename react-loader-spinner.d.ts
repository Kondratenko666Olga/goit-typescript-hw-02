declare module 'react-loader-spinner' {
    import * as React from 'react';
  
    interface OvalProps {
      height?: number;
      width?: number;
      color?: string;
      wrapperStyle?: React.CSSProperties;
      wrapperClass?: string;
      visible?: boolean;
      ariaLabel?: string;
      secondaryColor?: string;
      strokeWidth?: number;
      strokeWidthSecondary?: number;
    }
  
    export class Oval extends React.Component<OvalProps> {}
  }
  