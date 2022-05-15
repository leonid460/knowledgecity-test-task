import styled from 'styled-components';

export const Container = styled.div<{ $size: number, $color?: string }>`
  display: flex;
  width: ${({ $size }) => `${$size}px`};
  height: ${({ $size }) => `${$size}px`};
  
  & path {
    fill: ${({ $color }) => $color || ''};
  }
`;
