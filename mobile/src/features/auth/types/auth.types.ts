
export type LoginRequest = {
  email: string;
  password: string;
};

export type TokenResponse = {
  access_token: string;
  token_type: string;
};

export type AuthUser = {
  id: number;
  username: string;
  email: string;
  display_name: string;
  bio: string | null;
  avatar_url: string | null;
};
