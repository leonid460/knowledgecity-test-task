import { StudentInfo, StudentStudyGroup } from 'api/types';
import { UserInfo, UserStudyGroup } from './types';

function adaptUserStudyGroup(rawData: StudentStudyGroup): UserStudyGroup {
  return {
    id: rawData.id,
    title: rawData.title,
    createdAt: rawData.created_at,
    updatedAt: rawData.updated_at || undefined
  }
}

export function adaptUserInfo(rawData: StudentInfo): UserInfo {
  return {
    id: rawData.id,
    email: rawData.email,
    firstName: rawData.first_name,
    lastName: rawData.last_name,
    authorId: rawData.author_id,
    address: rawData.address,
    country: rawData.country,
    studyGroup: adaptUserStudyGroup(rawData.study_group),
    createdAt: rawData.created_at,
    deletedAt: rawData.deleted_at || undefined,
    updatedAt: rawData.updated_at || undefined,
  }
}
