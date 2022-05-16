import { httpRequest } from 'utils/httpRequest';
import { UpdateStudentInfoParams } from './types';

export function updateStudentInfo(params: UpdateStudentInfoParams) {
  const { id, firstName, lastName, email, studyGroupId } = params;

  return httpRequest({
    method: `/app/students/${id}`,
    type: 'PUT',
    body: {
      first_name: firstName,
      last_name: lastName,
      email: email,
      study_group_id: studyGroupId
    }
  });
}