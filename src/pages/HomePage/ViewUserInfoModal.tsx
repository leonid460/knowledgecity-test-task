import { useState, useEffect, FC } from 'react';
import { Modal } from 'components/Modal';
import { getStudentInfo } from 'api/getStudentInfo';
import { StudentInfo } from 'api/types';
import {
  UserInfoTable,
  UserInfoTableRow,
  UserInfoTableRowName,
  UserInfoTableRowValue
} from './styled';
import { ViewUserInfoModalProps } from './types';
import { ViewUserInfoModalSkeleton } from './ViewUserInfoModalSkeleton';

export const ViewUserInfoModal: FC<ViewUserInfoModalProps> = ({ closeModal, userId }) => {
  const [userData, setUserData] = useState<StudentInfo | null>(null);
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    setIsPending(true);
    getStudentInfo(userId)
      .then(data => setUserData(data))
      .finally(() => setIsPending(false));
  }, [userId])

  return (
    <Modal closeModal={closeModal}>
      {isPending && <ViewUserInfoModalSkeleton />}
      {!isPending && userData && (
        <UserInfoTable>
          <UserInfoTableRow>
            <UserInfoTableRowName>first name</UserInfoTableRowName>
            <UserInfoTableRowValue>{userData.first_name}</UserInfoTableRowValue>
          </UserInfoTableRow>

          <UserInfoTableRow>
            <UserInfoTableRowName>last name</UserInfoTableRowName>
            <UserInfoTableRowValue>{userData.last_name}</UserInfoTableRowValue>
          </UserInfoTableRow>

          <UserInfoTableRow>
            <UserInfoTableRowName>email</UserInfoTableRowName>
            <UserInfoTableRowValue>{userData.email}</UserInfoTableRowValue>
          </UserInfoTableRow>

          <UserInfoTableRow>
            <UserInfoTableRowName>study group</UserInfoTableRowName>
            <UserInfoTableRowValue>{userData.study_group.title}</UserInfoTableRowValue>
          </UserInfoTableRow>

          <UserInfoTableRow>
            <UserInfoTableRowName>country</UserInfoTableRowName>
            <UserInfoTableRowValue>{userData.country}</UserInfoTableRowValue>
          </UserInfoTableRow>

          <UserInfoTableRow>
            <UserInfoTableRowName>address</UserInfoTableRowName>
            <UserInfoTableRowValue>{userData.address}</UserInfoTableRowValue>
          </UserInfoTableRow>
        </UserInfoTable>
      )}
    </Modal>
  );
}