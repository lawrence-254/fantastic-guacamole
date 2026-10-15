
import { Alert, ScrollView, Text } from "react-native";
import { useRouter } from "expo-router";

import EditProfileForm, {
  type ProfileFormValues,
} from "../features/profile/components/EditProfileForm";
import styles from "./edit-profile.styles";

const initialValues: ProfileFormValues = {
  displayName: "RawReel Creator",
  bio: "Sharing videos, stories, and live podcasts.",
  avatarUrl: "",
};

export default function EditProfileScreen() {
  const router = useRouter();

  async function handleSave(values: ProfileFormValues) {
    // Temporary local demonstration; API integration comes next.
    console.log("Profile changes:", values);
    Alert.alert("Success", "Profile form works. API saving is next.");
    router.back();
  }

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
