import styled from 'styled-components';
import { Input as OriginalInput } from 'components/Input';

export const Input = styled(OriginalInput)`
  flex-grow: 1;
  border: none;
  padding: 0;
  margin-left: 4px;
  background: transparent;
  font-size: 15px;
  outline: none;
  color: #808080;
`;

export const Container = styled.div<{ $focused: boolean }>`
  display: flex;
  align-items: center;
  padding: 16px 19px;
  border: 1px solid ${({ $focused }) => $focused ? '#ec8d3d' : '#a8a8a8'};
  border-radius: 28px;
  background: white;
  box-shadow: ${({ $focused }) => $focused ? '0 5px 15px 0 rgba(0,0,0,0.2)' : ''};
  
  &:focus {
    box-shadow: 0 5px 15px 0 rgba(0,0,0,0.2);
  }
  
  & > ${Input} {
    color: ${({ $focused }) => $focused ? '#ec8d3d' : '#808080'};
  }
`;
