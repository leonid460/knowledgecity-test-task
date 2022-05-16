import { createEffect } from 'effector';
import { httpRequest } from 'utils/httpRequest';
import { $userList } from './store';
import { FetchUserListArgs } from './types';
import { StudentInfo as RawUserInfo } from 'api/types';
import { adaptUserInfo } from './utils';

export const fetchUserList = createEffect(async ({ page }: FetchUserListArgs) => {
  const data = await httpRequest({
    method: '/app/students',
    type: 'GET',
    queryParams: { page: String(page) }
  });

  const rawData = data['student_list'];
  const rawUsers: RawUserInfo[] = rawData.data;
  const lastPage: number = rawData['last_page'];
  const total: number = rawData.total;
  const currentPage: number = rawData['current_page'];

  return {
    currentPage,
    lastPage,
    total,
    users: rawUsers.map(adaptUserInfo)
  }
});

$userList.on(
  fetchUserList.doneData,
  (_, payload) => payload
);
