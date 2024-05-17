export type IsValidUserResponse =
  | {
      isValidUser: true;
      user?: any;
    }
  | { isValidUser: false; error: string };

export type IsValidPasswordResponse =
  | {
      isValidPassword: true;
    }
  | { isValidPassword: false; error: string };
