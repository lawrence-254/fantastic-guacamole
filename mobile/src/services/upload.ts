import { clearAccessToken, getAccessToken } from "./token-storage";

const API_URL =
  process.env.EXPO_PUBLIC_API_URL ?? "http://localhost:8000/api";

export async function apiUpload<T>(
  path: string,
  formData: FormData,
): Promise<T> {
  const token = await getAccessToken();

  const response = await fetch(`${API_URL}${path}`, {
    method: "POST",
    headers: token ? { Authorization: `Bearer ${token}` } : {},
    body: formData,
  });

  if (!response.ok) {
    let message = `Upload failed (${response.status}).`;

    try {
      const data: unknown = await response.json();

      if (
        typeof data === "object" &&
        data !== null &&
        "detail" in data &&
        typeof data.detail === "string"
      ) {
        message = data.detail;
      }
    } catch {
      // Keep the default error message if the response isn't JSON.
    }

    if (response.status === 401 && token) {
      await clearAccessToken();
    }

    throw new Error(message);
  }

  return response.json() as Promise<T>;
}
