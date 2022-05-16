import { FC } from 'react';
import { useStore } from 'effector-react';
import { $auth } from 'stores/auth/store';
import { logout } from 'stores/auth/events';
import { ReactComponent as LogoutIcon } from 'assets/logout.svg';
import {
  LogoutButtonContainer,
  LogoutIconContainer,
  UserControlPanelContainer,
  UserControlPanelEmail,
} from './styled';
import { LogoutButtonProps } from './types';

const LogoutButton: FC<LogoutButtonProps> = ({ onClick }) => (
  <LogoutButtonContainer onClick={onClick}>
    <LogoutIconContainer color="black" size={16}>
      <LogoutIcon />
    </LogoutIconContainer>
    <span>Log out</span>
  </LogoutButtonContainer>
);

export const UserControlPanel = () => {
  const { email } = useStore($auth);

  return (
    <UserControlPanelContainer>
      <UserControlPanelEmail>{email}</UserControlPanelEmail>
      {' • '}
      <LogoutButton onClick={() => logout()} />
    </UserControlPanelContainer>
  );
}