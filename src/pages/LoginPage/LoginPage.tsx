import { useState, FormEvent } from 'react';
import { ReactComponent as PasswordIcon } from 'assets/password.svg';
import { ReactComponent as UserIcon } from 'assets/user.svg';
import { IconContainer } from 'components/IconContainer';
import { signIn } from 'stores/auth/effects';
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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    signIn({ email, password, rememberMe });
  }

  return (
    <PageContainer>
      <ContentContainer>
        <Logo />
        <Form onSubmit={handleSubmit}>
          <WelcomeText>Welcome to the Learning Management System</WelcomeText>
          <Caption>Please log in to continue</Caption>
          <LoginFormInput
            placeholder="Email"
            icon={<IconContainer size={18}><UserIcon /></IconContainer>}
            value={email}
            setValue={setEmail}
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
