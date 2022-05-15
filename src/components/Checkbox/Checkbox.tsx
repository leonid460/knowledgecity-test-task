import { FC } from 'react';
import { LabelText } from './styled';
import { CheckboxProps } from './types';

export const Checkbox: FC<CheckboxProps> = ({ label, value , onChange, className }) => {
  return (
    <label className={className}>
      <input
        type="checkbox"
        checked={value}
        onChange={onChange}
      />
      <LabelText>{label}</LabelText>
    </label>
  );
}
