
import { useCallback, useEffect, useState } from "react";
import {
  Alert,
  ActivityIndicator,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import { useFocusEffect, useRouter } from "expo-router";

import { logout } from "../features/auth/services/auth-session";

import ProfileHeader from "../features/profile/components/ProfileHeader";
import { getCurrentUser } from "../features/auth/services/auth-session";
import type { AuthUser } from "../features/auth/types/auth.types";
import styles from "../styles/screens/profile.styles";

export default function ProfileScreen() {
  const router = useRouter();

  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadProfile = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const currentUser = await getCurrentUser();
      setUser(currentUser);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Unable to load your profile. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  }, []);
async function handleLogout() {
  try {
    await logout();
    router.replace("/login");
  } catch {
    Alert.alert("Logout failed", "Please try again.");
  }
}
useFocusEffect(
  useCallback(() => {
    void loadProfile();
  }, [loadProfile]),
);

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          padding: 24,
        }}
      >
        <ActivityIndicator size="large" color="#16804A" />
        <Text style={{ marginTop: 12 }}>
          Loading your profile...
        </Text>
      </View>
    );
  }

  if (error || !user) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          padding: 24,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "600",
            marginBottom: 8,
          }}
        >
          Unable to load profile
        </Text>

        <Text style={{ textAlign: "center", marginBottom: 20 }}>
          {error ?? "Please sign in to view your profile."}
        </Text>

        <Pressable
          onPress={() => void loadProfile()}
          style={{
            backgroundColor: "#16804A",
            paddingVertical: 12,
            paddingHorizontal: 24,
            borderRadius: 8,
            marginBottom: 12,
          }}
        >
          <Text style={{ color: "#FFFFFF", fontWeight: "600" }}>
            Try again
          </Text>
        </Pressable>

        <Pressable onPress={() => router.replace("/login")}>
          <Text style={{ color: "#16804A", fontWeight: "600" }}>
            Go to sign in
          </Text>
        </Pressable>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
    <View style={styles.topBar}>
  <Text style={styles.heading}>My Profile</Text>

  <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
    <Pressable
      style={styles.editButton}
      onPress={() => router.push("/edit-profile")}
    >
      <Text style={styles.editButtonText}>Edit profile</Text>
    </Pressable>

    <Pressable
      onPress={handleLogout}
      accessibilityRole="button"
      accessibilityLabel="Log out"
    >
      <Text style={{ color: "#B91C1C", fontWeight: "600" }}>
        Logout
      </Text>
    </Pressable>
  </View>
</View>

      <ProfileHeader
        username={user.username}
        displayName={user.display_name}
        bio={user.bio ?? ""}
      />

      <View style={styles.stats}>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>0</Text>
          <Text style={styles.statLabel}>Videos</Text>
        </View>

        <View style={styles.statItem}>
          <Text style={styles.statNumber}>0</Text>
          <Text style={styles.statLabel}>Followers</Text>
        </View>

        <View style={styles.statItem}>
          <Text style={styles.statNumber}>0</Text>
          <Text style={styles.statLabel}>Following</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Your content</Text>
        <Text style={styles.emptyText}>
          Your videos and podcasts will appear here.
        </Text>
      </View>
    </ScrollView>
  );
}
