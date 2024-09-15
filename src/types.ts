export enum Filters {
  NAME = 'name',
  USERNAME = 'username',
  EMAIL = 'email',
  PHONE = 'phone',
}

export enum AppStage {
  LOADING = 'loading',
  ERROR = 'error',
  SUCCESS = 'success',
}

export type User = {
  id: string;
  name: string;
  username: string;
  email: string;
  phone: string;
};
