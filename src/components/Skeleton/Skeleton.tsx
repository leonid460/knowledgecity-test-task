import styled from 'styled-components';

export const Skeleton = styled.div`
  border-radius: 6px;
  background: #eee;
  background: linear-gradient(110deg, #f5f5f5 8%, #ececec 18%, #f5f5f5 33%);
  background-size: 200% 100%;
  animation: 1.5s shine linear infinite;

  @keyframes shine {
    to {
      background-position-x: -200%;
    }
  }
`;
