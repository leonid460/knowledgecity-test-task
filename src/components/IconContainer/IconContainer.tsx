import { FC } from 'react';
import { Container } from './styled';
import { IconContainerProps } from './types';

export const IconContainer: FC<IconContainerProps> = ({
  children,
  className,
  size = 24,
  color,
  onClick
}) => {
  return (
    <Container
      className={className}
      $size={size}
      $color={color}
      onClick={onClick}
    >
      {children}
    </Container>
  );
}
