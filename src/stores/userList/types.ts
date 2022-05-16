export type UserStudyGroup = {
  id: string;
  title: string;
  createdAt: string;
  updatedAt?: string;
}

export type UserInfo = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  authorId: string;
  address: string;
  country: string;
  studyGroup: UserStudyGroup;
  createdAt: string;
  deletedAt?: string;
  updatedAt?: string;
}

export type UserListStoreData = {
  currentPage: number;
  total: number;
  lastPage: number;
  users: UserInfo[];
}

export type FetchUserListArgs = {
  page: number;
}

