import { FC } from 'react';
import { InputProps } from './types';

export const Input: FC<InputProps> = ({
  value,
  setValue,
  className,
  type,
  placeholder,
  onFocus,
  onBlur
}) => {
  return (
    <input
      placeholder={placeholder}
      className={className}
      type={type}
      value={value}
      onChange={event => setValue(event.target.value)}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  );
};
