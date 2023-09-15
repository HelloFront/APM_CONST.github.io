import React from 'react';
import { ButtonProps } from 'reactstrap';

interface IProps extends ButtonProps {
  onClick: () => void;
  children?: React.ReactNode;
}

const SimpleButton = ({ onClick, children, ...props }: IProps) => {
  return (
    <button onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default SimpleButton;
