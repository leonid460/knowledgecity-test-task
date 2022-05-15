import { useState } from 'react';
import { ReactComponent as PasswordIcon } from 'assets/password.svg';
import { ReactComponent as UserIcon } from 'assets/user.svg';
import { IconContainer } from 'components/IconContainer';
import { SubmitButton } from './SubmitButton';
import {
  Caption,
  Checkbox,
  ContentContainer,
  Form,
  LoginFormInput,
  Logo,
  PageContainer,
  WelcomeText,
} from './styled';

export const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <PageContainer>
      <ContentContainer>
        <Logo />
        <Form>
          <WelcomeText>Welcome to the Learning Management System</WelcomeText>
          <Caption>Please log in to continue</Caption>
          <LoginFormInput
            placeholder="Username"
            icon={<IconContainer size={18}><UserIcon /></IconContainer>}
            value={username}
            setValue={setUsername}
          />
          <LoginFormInput
            placeholder="Password"
            icon={<IconContainer size={18}><PasswordIcon /></IconContainer>}
            value={password}
            setValue={setPassword}
            type="password"
          />
          <Checkbox
            label="Remember me"
            value={rememberMe}
            onChange={() => setRememberMe(state => !state)}
          />
          <SubmitButton>Log in</SubmitButton>
        </Form>
      </ContentContainer>
    </PageContainer>
  );
};
