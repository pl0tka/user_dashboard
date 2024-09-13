export enum Filters {
  NAME = 'name',
  USERNAME = 'username',
  EMAIL = 'email',
  PHONE = 'phone',
}

export type User = {
  id: string;
  name: string;
  username: string;
  email: string;
  phone: string;
};
