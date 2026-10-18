
import { apiRequest } from "../../../services/api";
import { clearAccessToken } from "../../../services/token-storage";
import type { AuthUser } from "../types/auth.types";

export async function getCurrentUser(): Promise<AuthUser> {
  return apiRequest<AuthUser>("/auth/me");
}

export async function logout(): Promise<void> {
  await clearAccessToken();
}
