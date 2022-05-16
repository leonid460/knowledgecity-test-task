export type StudentStudyGroup = {
  id: string;
  title: string;
  created_at: string;
  updated_at: string | null;
  deleted_at: string | null;
};

export type StudentInfo = {
  address: string;
  author_id: string;
  country: string;
  created_at: string;
  deleted_at: string | null;
  email: string;
  first_name: string;
  id: string;
  last_name: string;
  study_group: StudentStudyGroup;
  study_group_id: string;
  updated_at: string | null;
};
