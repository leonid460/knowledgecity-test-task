import styled from 'styled-components';
import { ReactComponent as OriginalSpinnerIcon } from 'assets/spinner.svg';

export const SpinnerIcon = styled(OriginalSpinnerIcon)`
  animation: 1.5s spin linear infinite;
  
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    
    to {
      transform: rotate(360deg);
    }
  }
`;