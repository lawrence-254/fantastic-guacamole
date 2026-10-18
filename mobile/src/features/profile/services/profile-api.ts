
import { apiRequest } from "../../../services/api";
import type {
  ProfileUpdateRequest,
  UserProfile,
} from "../types/profile.types";

export function getMyProfile(): Promise<UserProfile> {
  return apiRequest<UserProfile>("/auth/me");
}

export function getPublicProfile(username: string): Promise<UserProfile> {
  return apiRequest<UserProfile>(
    `/profiles/${encodeURIComponent(username)}`,
    { authenticated: false },
  );
}

export function updateMyProfile(
  values: ProfileUpdateRequest,
): Promise<UserProfile> {
  return apiRequest<UserProfile>("/profiles/me", {
    method: "PATCH",
    body: values,
  });
}
