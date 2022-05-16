type EditUserFormValues = {
  firstName: string;
  lastName: string;
  email: string;
}

function required(value: string) {
  return !value;
}

export function validateEditUserForm(values: EditUserFormValues) {
  return  {
    firstName: required(values.firstName),
    lastName: required(values.lastName),
    email: required(values.email),
  }
}
