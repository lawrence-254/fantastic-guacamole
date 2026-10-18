
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import { useRouter } from "expo-router";

import EditProfileForm, {
  type ProfileFormValues,
} from "../features/profile/components/EditProfileForm";
import {
  getMyProfile,
  updateMyProfile,
} from "../features/profile/services/profile-api";
import type { UserProfile } from "../features/profile/types/profile.types";
import styles from "../styles/screens/edit-profile.styles";

export default function EditProfileScreen() {
  const router = useRouter();

  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;

    async function loadProfile() {
      try {
        const result = await getMyProfile();

        if (active) {
          setProfile(result);
        }
      } catch (err) {
        if (active) {
          setError(
            err instanceof Error
              ? err.message
              : "Unable to load your profile.",
          );
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }

    void loadProfile();

    return () => {
      active = false;
    };
  }, []);

  async function handleSave(values: ProfileFormValues) {
    const updatedProfile = await updateMyProfile({
      display_name: values.displayName.trim(),
      bio: values.bio.trim(),
      avatar_url: values.avatarUrl.trim() || null,
    });

    setProfile(updatedProfile);

    Alert.alert("Success", "Your profile has been updated.");
    router.back();
  }

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
        <Text style={{ marginTop: 12 }}>Loading your profile...</Text>
      </View>
    );
  }

  if (error || !profile) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          padding: 24,
        }}
      >
        <Text style={{ textAlign: "center", marginBottom: 16 }}>
          {error ?? "Your profile could not be loaded."}
        </Text>

        <Pressable onPress={() => router.replace("/login")}>
          <Text style={{ color: "#16804A", fontWeight: "600" }}>
            Go to sign in
          </Text>
        </Pressable>
      </View>
    );
  }

  const initialValues: ProfileFormValues = {
    displayName: profile.display_name,
    bio: profile.bio ?? "",
    avatarUrl: profile.avatar_url ?? "",
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Edit Profile</Text>

      <Text style={styles.description}>
        Customize how you appear to the RawReel community.
      </Text>

      <EditProfileForm
        initialValues={initialValues}
        onSave={handleSave}
      />
    </ScrollView>
  );
}
