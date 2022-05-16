import { useEffect, useState } from 'react';
import { useStore } from 'effector-react';
import { PageSelector } from 'components/PageSelector';
import { $userList } from 'stores/userList/store';
import { fetchUserList } from 'stores/userList/effects';
import { EditUserInfoModal } from './EditUserInfoModal';
import { ListItem } from './ListItem';
import { ListSkeleton } from './ListSkeleton';
import {
  ListContainer,
  PageContainer,
  PageFooter,
  PageOuterContainer,
  Title,
} from './styled';
import { ViewUserInfoModal } from './ViewUserInfoModal';

export const HomePage = () => {
  const { users, currentPage, lastPage } = useStore($userList);
  const isPending = useStore(fetchUserList.pending);
  const [selectedToViewUserId, setSelectedToViewUserId] = useState<string>('');
  const [selectedToEditUserId, setSelectedToEditUserId] = useState<string>('');

  const goToPage = (page: number) => {
    if (page !== currentPage) {
      fetchUserList({ page });
    }
  };

  useEffect(() => {
    fetchUserList({ page: 1 });
  }, []);

  return (
    <>
      <PageOuterContainer>
        <PageContainer>
          <Title>User List</Title>

          {!isPending && <ListContainer>
            {users.map((user) => (
              <ListItem
                key={user.id}
                email={user.email}
                firstName={user.firstName}
                lastName={user.lastName}
                groupTitle={user.studyGroup.title}
                onTitleClick={() => setSelectedToViewUserId(user.id)}
                onEditButtonClick={() => setSelectedToEditUserId(user.id)}
              />
            ))}
          </ListContainer>}

          {isPending && <ListSkeleton/>}

          <PageSelector
            currentPage={currentPage}
            lastPage={lastPage}
            goToPage={goToPage}
          />
        </PageContainer>
        <PageFooter />
      </PageOuterContainer>

      {!!selectedToViewUserId && (
        <ViewUserInfoModal
          userId={selectedToViewUserId}
          closeModal={() => setSelectedToViewUserId('')}
        />
      )}

      {!!selectedToEditUserId && (
        <EditUserInfoModal
          userId={selectedToEditUserId}
          closeModal={() => setSelectedToEditUserId('')}
        />
      )}
    </>
  );
};
