import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const PageNumber = styled.div<{ $isCurrent: boolean }>`
  border-bottom: 2px solid ${({ $isCurrent }) => $isCurrent ? '#e98c3a' : 'transparent'};
  padding: 0 6px 4px 6px;
  font-size: 18px;
  cursor: pointer;
`;

export const DirectionButton = styled.div`
  margin: 0 6px;
  font-size: 18px;
  cursor: pointer;
`;
