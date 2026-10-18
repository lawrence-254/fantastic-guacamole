
export type UserProfile = {
  id: number;
  username: string;
  email: string;
  display_name: string;
  bio: string | null;
  avatar_url: string | null;
};

export type ProfileUpdateRequest = {
  display_name: string;
  bio: string;
  avatar_url: string | null;
};
