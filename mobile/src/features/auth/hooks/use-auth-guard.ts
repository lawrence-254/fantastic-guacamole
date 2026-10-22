
import { useEffect, useState } from "react";
import { useRouter, useSegments } from "expo-router";

import {
  clearAccessToken,
  getAccessToken,
} from "../../../services/token-storage";
import { getCurrentUser } from "../services/auth-session";

export function useAuthGuard(): boolean {
  const router = useRouter();
  const segments = useSegments();
  const firstSegment = segments[0];

  const [checking, setChecking] = useState(true);

  useEffect(() => {
    let active = true;

    async function checkAuthentication() {
      const isPublicRoute =
        firstSegment === "login" || firstSegment === "register";

      try {
        const token = await getAccessToken();
        let authenticated = false;

        if (token) {
          try {
            await getCurrentUser();
            authenticated = true;
          } catch (error) {
            if (
              error instanceof Error &&
              error.message.startsWith("Request failed (401)")
            ) {
              await clearAccessToken();
            } else {
              authenticated = true;
            }
          }
        }

        if (!active) return;

        if (!authenticated && !isPublicRoute) {
          router.replace("/login");
        } else if (authenticated && isPublicRoute) {
          router.replace("/profile");
        }
      } catch {
        if (active && !isPublicRoute) {
          router.replace("/login");
        }
      } finally {
        if (active) {
          setChecking(false);
        }
      }
    }

    void checkAuthentication();

    return () => {
      active = false;
    };
  }, [firstSegment, router]);

  return checking;
}