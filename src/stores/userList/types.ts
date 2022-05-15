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

export type RawUserStudyGroup = {
  id: string;
  title: string;
  created_at: string;
  updated_at: string | null;
  deleted_at: string | null;
}

export type RawUserInfo = {
  address: string;
  author_id: string;
  country: string;
  created_at: string;
  deleted_at: string | null;
  email: string;
  first_name: string;
  id: string;
  last_name: string;
  study_group: RawUserStudyGroup;
  study_group_id: string;
  updated_at: string | null;
}
