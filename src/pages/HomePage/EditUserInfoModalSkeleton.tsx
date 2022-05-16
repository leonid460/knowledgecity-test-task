import { Skeleton } from 'components/Skeleton';
import { UserInfoTable } from './styled';

export const EditUserInfoModalSkeleton = () => (
  <UserInfoTable>
    <Skeleton height="34px" />
    <Skeleton height="34px" />
    <Skeleton height="34px" />
  </UserInfoTable>
);

export const EditUserInfoModalFooterSkeleton = () => (
  <Skeleton height="34px" width="86px" />
);
