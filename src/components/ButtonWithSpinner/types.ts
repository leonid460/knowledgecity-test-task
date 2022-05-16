import { MouseEvent } from 'react';

export interface ButtonWithSpinnerProps {
  onClick?: (event: MouseEvent) => void;
  children?: string;
  isLoading?: boolean;
}
