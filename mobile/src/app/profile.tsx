
import { Pressable, ScrollView, Text, View } from "react-native";
import { useRouter } from "expo-router";
import ProfileHeader from "../features/profile/components/ProfileHeader";
import styles from "./profile.styles";

export default function ProfileScreen() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.topBar}>
        <Text style={styles.heading}>My Profile</Text>
        <Pressable
          style={styles.editButton}
          onPress={() => router.push("/edit-profile")}
        >
          <Text style={styles.editButtonText}>Edit profile</Text>
        </Pressable>
      </View>

      <ProfileHeader
        username="rawreel_creator"
        displayName="RawReel Creator"
        bio="Sharing videos, stories, and live podcasts."
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
