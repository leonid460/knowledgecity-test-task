import styled from 'styled-components';
import { IconContainer } from 'components/IconContainer';
import { Input } from 'components/Input';
import { Skeleton } from 'components/Skeleton';

export const PageOuterContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
`;

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  padding: 11px 60px 28px 60px;
`;

export const PageFooter = styled.div`
  height: 44px;
  background: #ebebeb;
`;

export const Title = styled.span`
  margin-bottom: 9px;
  text-align: center;
  font-size: 33px;
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
  border-top: 16px solid #e98c3a;
  max-width: 1000px;
  width: 100%;
`;

export const ListItemContainer = styled.div`
  display: grid;
  grid-template-columns: 24px auto 220px;
  grid-template-rows: auto auto;
  justify-items: start;
  column-gap: 32px;
  row-gap: 3px;
  padding: 13px 13px 13px 79px;
  
  &:nth-child(odd) {
    background: white;
  }

  &:nth-child(even) {
    background: #ebebeb;
  }
`;

export const CheckMarkContainer = styled(IconContainer)`
  grid-column: 1 / 2;
  grid-row: 1 / 2;
`;

export const UserEmail = styled.span`
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  cursor: pointer;
  
  &:hover {
    color: #ec8d3d;
  }
`;

export const EditIconContainer = styled(IconContainer)`
  grid-column: 3 / 4;
  grid-row: 1 / 2;
  cursor: pointer;
`;


export const UserName = styled.span`
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  color: #777676;
`;

export const UserGroupName = styled.span`
  grid-column: 3 / 4;
  grid-row: 2 / 3;
`;

export const CheckMarkSkeleton = styled(Skeleton)`
  width: 23px;
  height: 23px;
  border-radius: 50%;
`;

export const UserEmailSkeleton = styled(Skeleton)`
  width: 195px;
  height: 23px;
`;

export const PencilSkeleton = styled(Skeleton)`
  width: 15px;
  height: 15px;
`;

export const UserNameSkeleton = styled(Skeleton)`
  width: 122px;
  height: 18.5px;
`;

export const UserGroupSkeleton = styled(Skeleton)`
  width: 130px;
  height: 18.5px;
`;

export const UserInfoTable = styled.div`
  display: flex;
  flex-direction: column;
  
  & > * {
    margin-bottom: 16px;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const UserInfoTableRow = styled.div`
  display: grid;
  grid-template-columns: 25% auto;
`;

export const UserInfoTableRowName = styled.span`
  grid-column: 1 / 2;
  color: #656363;
`;

export const UserInfoTableRowValue = styled.span`
  grid-column: 2 / 3;
  white-space: pre-wrap;
`;

export const EditUserInfoInput = styled(Input)<{ error?: boolean }>`
  padding: 8px 10px;
  outline: none;
  border: 1px solid ${({ error }) => error ? 'red' : 'black'};
  border-radius: 6px;
  font-size: 14px;
  
  &:focus {
    border-color: #ec8d3d;
  }
`;
