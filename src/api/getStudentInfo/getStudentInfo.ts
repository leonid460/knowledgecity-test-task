import { httpRequest } from 'utils/httpRequest';
import { StudentInfo } from '../types';

export async function getStudentInfo(studentId: string): Promise<StudentInfo> {
  const data = await httpRequest({
    method: `/app/students/${studentId}`,
    type: 'GET'
  });

  return data.student;
}
