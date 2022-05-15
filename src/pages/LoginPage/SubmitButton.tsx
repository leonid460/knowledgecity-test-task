import { FC } from 'react';
import { ReactComponent as ArrowIcon } from 'assets/arrow.svg';
import { ArrowContainer, Button } from './styled';
import { SubmitButtonProps } from './types';

const Arrow = () => {
  return (
    <ArrowContainer color="white">
      <ArrowIcon />
    </ArrowContainer>
  );
};

export const SubmitButton: FC<SubmitButtonProps> = ({ onClick, children }) => (
  <Button onClick={onClick}>
    {children}
    <Arrow />
  </Button>
);
