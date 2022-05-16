import { useState, useEffect, FC } from 'react';
import { useStore } from 'effector-react';
import { $userList } from 'stores/userList/store';
import { fetchUserList } from 'stores/userList/effects';
import { Modal } from 'components/Modal';
import { getStudentInfo } from 'api/getStudentInfo';
import { updateStudentInfo } from 'api/updateStudentInfo';
import { ButtonWithSpinner } from 'components/ButtonWithSpinner';
import {
  EditUserInfoModalSkeleton,
  EditUserInfoModalFooterSkeleton
} from './EditUserInfoModalSkeleton';
import { EditUserInfoInput, UserInfoTable } from './styled';
import { EditUserInfoModalProps } from './types';
import { validateEditUserForm } from './utils';

const initValidationErrors = {
  firstName: false,
  lastName: false,
  email: false,
};

export const EditUserInfoModal: FC<EditUserInfoModalProps> = ({ userId, closeModal }) => {
  const { currentPage } = useStore($userList);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [studyGroupId, setStudyGroupId] = useState('');

  const [isUserInfoLoading, setIsUserInfoLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [validationErrors, setValidationErrors] = useState(initValidationErrors);

  const submit = () => {
    const errors = validateEditUserForm({ firstName, lastName, email });
    const areThereErrors = Object.values(errors).includes(true);

    setValidationErrors(errors);

    if (areThereErrors) {
      return;
    }

    setIsSubmitting(true);
    updateStudentInfo({
      id: userId,
      firstName,
      lastName, email,
      studyGroupId
    })
      .then(() => {
        fetchUserList({ page: currentPage });
        closeModal();
      })
      .finally(() => setIsSubmitting(false));
  };

  const handleCloseModal = () => {
    if (!isSubmitting) {
      closeModal();
    }
  }

  const renderFooter = () => {
    if (isUserInfoLoading) {
      return <EditUserInfoModalFooterSkeleton />;
    }

    return (
      <ButtonWithSpinner
        isLoading={isSubmitting}
        onClick={submit}
      >
        Submit
      </ButtonWithSpinner>
    );
  }

  useEffect(() => {
    setIsUserInfoLoading(true);
    getStudentInfo(userId)
      .then(data => {
      setFirstName(data.first_name);
      setLastName(data.last_name);
      setEmail(data.email);
      setStudyGroupId(data.study_group_id);
    })
      .finally(() => setIsUserInfoLoading(false));
  }, [userId]);

  return (
    <Modal
      closeModal={handleCloseModal}
      footer={renderFooter()}
    >
      {isUserInfoLoading && <EditUserInfoModalSkeleton />}
      {!isUserInfoLoading && (
        <UserInfoTable>
          <EditUserInfoInput
            placeholder="first name"
            value={firstName}
            setValue={setFirstName}
            error={validationErrors.firstName}
          />
          <EditUserInfoInput
            placeholder="last name"
            value={lastName}
            setValue={setLastName}
            error={validationErrors.lastName}
          />
          <EditUserInfoInput
            placeholder="email"
            value={email}
            setValue={setEmail}
            error={validationErrors.email}
          />
        </UserInfoTable>
      )}
    </Modal>
  )
}