import { HTMLInputTypeAttribute, FocusEvent } from 'react';

export interface InputProps {
  value: string;
  setValue: (value: string) => void;
  className?: string;
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  onFocus?: (event: FocusEvent) => void;
  onBlur?: (event: FocusEvent) => void;
}
