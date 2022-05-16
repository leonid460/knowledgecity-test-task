import { FC } from 'react';
import { ReactComponent as CheckmarkIcon } from 'assets/checkmark.svg';
import { ReactComponent as PencilIcon } from 'assets/pencil.svg';
import {
  CheckMarkContainer,
  EditIconContainer,
  ListItemContainer,
  UserEmail,
  UserGroupName,
  UserName,
} from './styled';
import { ListItemProps } from './types';

export const ListItem: FC<ListItemProps> = ({
  email,
  groupTitle,
  lastName,
  firstName,
  onTitleClick,
  onEditButtonClick
}) => {
  return (
    <ListItemContainer>
      <CheckMarkContainer size={23} color="#188836">
        <CheckmarkIcon />
      </CheckMarkContainer>
      <UserEmail onClick={onTitleClick}>{email}</UserEmail>
      <EditIconContainer size={15} color="#ec8d3d" onClick={onEditButtonClick}>
        <PencilIcon />
      </EditIconContainer>
      <UserName>{firstName} {lastName}</UserName>
      <UserGroupName>{groupTitle}</UserGroupName>
    </ListItemContainer>
  );
};
