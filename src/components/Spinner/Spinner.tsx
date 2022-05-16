import { FC } from 'react';
import { IconContainer } from 'components/IconContainer';
import { SpinnerIcon } from './styled';
import { SpinnerProps } from './types';

export const Spinner: FC<SpinnerProps> = ({ color = 'black', size = 24 }) => {
  return (
    <IconContainer color={color} size={size}>
      <SpinnerIcon />
    </IconContainer>
  )
}
