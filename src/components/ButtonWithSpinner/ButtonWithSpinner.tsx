import { FC } from 'react';
import { Button } from 'components/Button';
import { Spinner } from 'components/Spinner';
import { ButtonWithSpinnerProps } from './types';

export const ButtonWithSpinner: FC<ButtonWithSpinnerProps> = ({ children, onClick, isLoading }) => (
  <Button onClick={onClick}>
    {!!isLoading ? <Spinner color="white" /> : children}
  </Button>
);
