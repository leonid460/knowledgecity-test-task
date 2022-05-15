import { ReactNode } from 'react';
import {
  CheckMarkContainer,
  CheckMarkSkeleton,
  EditIconContainer,
  ListContainer,
  ListItemContainer,
  PencilSkeleton,
  UserEmail,
  UserEmailSkeleton,
  UserGroupName, UserGroupSkeleton,
  UserName,
  UserNameSkeleton,
} from './styled';

const ListItemSkeleton = () => {
  return (
    <ListItemContainer>
      <CheckMarkContainer>
        <CheckMarkSkeleton />
      </CheckMarkContainer>
      <UserEmail><UserEmailSkeleton /></UserEmail>
      <EditIconContainer>
        <PencilSkeleton />
      </EditIconContainer>
      <UserName><UserNameSkeleton /></UserName>
      <UserGroupName><UserGroupSkeleton /></UserGroupName>
    </ListItemContainer>
  );
};

export const ListSkeleton = () => {
  const listToRender: ReactNode[] = [];

  for (let i = 0; i < 15; i++) {
    listToRender.push(<ListItemSkeleton key={i} />)
  }

  return (
    <ListContainer>
      {listToRender}
    </ListContainer>
  );
};
