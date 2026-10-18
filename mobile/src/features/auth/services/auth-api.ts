
import { apiRequest } from "../../../services/api";
import { saveAccessToken } from "../../../services/token-storage";
import type {
  AuthUser,
  LoginRequest,
  TokenResponse,
} from "../types/auth.types";
import type { RegisterRequest } from "../types/register.types";

export async function login(
  credentials: LoginRequest,
): Promise<TokenResponse> {
  const token = await apiRequest<TokenResponse>("/auth/login", {
    method: "POST",
    body: credentials,
    authenticated: false,
  });

  await saveAccessToken(token.access_token);

  return token;
}
export async function register(
  values: RegisterRequest,
): Promise<AuthUser> {
  return apiRequest<AuthUser>("/auth/register", {
    method: "POST",
    body: values,
    authenticated: false,
  });
}