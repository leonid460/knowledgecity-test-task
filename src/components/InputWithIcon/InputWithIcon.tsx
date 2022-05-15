import { FC, useState } from 'react';
import { Container, Input } from './styled';
import { InputWithIconProps } from './types';

export const InputWithIcon: FC<InputWithIconProps> = ({
  value,
  setValue,
  type,
  placeholder,
  className,
  icon
}) => {
  const [focused, setFocused] = useState(false);

  return (
    <Container className={className} $focused={focused}>
      {icon}
      <Input
        value={value}
        setValue={setValue}
        type={type}
        placeholder={placeholder}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
    </Container>
  );
};
