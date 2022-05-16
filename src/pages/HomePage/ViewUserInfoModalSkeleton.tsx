import { Skeleton } from 'components/Skeleton';
import {
  UserInfoTable,
  UserInfoTableRow,
  UserInfoTableRowName,
  UserInfoTableRowValue
} from './styled';

export const ViewUserInfoModalSkeleton = () => (
  <UserInfoTable>
    <UserInfoTableRow>
      <UserInfoTableRowName>first name</UserInfoTableRowName>
      <UserInfoTableRowValue>
        <Skeleton height="18.5px" width="60px" />
      </UserInfoTableRowValue>
    </UserInfoTableRow>

    <UserInfoTableRow>
      <UserInfoTableRowName>last name</UserInfoTableRowName>
      <UserInfoTableRowValue>
        <Skeleton height="18.5px" width="65px" />
      </UserInfoTableRowValue>
    </UserInfoTableRow>

    <UserInfoTableRow>
      <UserInfoTableRowName>email</UserInfoTableRowName>
      <UserInfoTableRowValue>
        <Skeleton height="18.5px" width="180px" />
      </UserInfoTableRowValue>
    </UserInfoTableRow>

    <UserInfoTableRow>
      <UserInfoTableRowName>study group</UserInfoTableRowName>
      <UserInfoTableRowValue>
        <Skeleton height="18.5px" width="90px" />
      </UserInfoTableRowValue>
    </UserInfoTableRow>

    <UserInfoTableRow>
      <UserInfoTableRowName>country</UserInfoTableRowName>
      <UserInfoTableRowValue>
        <Skeleton height="18.5px" width="50px" />
      </UserInfoTableRowValue>
    </UserInfoTableRow>

    <UserInfoTableRow>
      <UserInfoTableRowName>address</UserInfoTableRowName>
      <UserInfoTableRowValue>
        <Skeleton height="18.5px" width="160px" />
      </UserInfoTableRowValue>
    </UserInfoTableRow>
  </UserInfoTable>
)