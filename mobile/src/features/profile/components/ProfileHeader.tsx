
import { Image, Text, View } from "react-native";
import styles from "./ProfileHeader.styles";

type ProfileHeaderProps = {
  username: string;
  displayName: string;
  bio?: string | null;
  avatarUrl?: string | null;
};

export default function ProfileHeader({
  username,
  displayName,
  bio,
  avatarUrl,
}: ProfileHeaderProps) {
  return (
    <View style={styles.container}>
      {avatarUrl ? (
        <Image source={{ uri: avatarUrl }} style={styles.avatar} />
      ) : (
        <View style={styles.avatarFallback}>
          <Text style={styles.avatarInitial}>
            {displayName.charAt(0).toUpperCase() || "R"}
          </Text>
        </View>
      )}

      <Text style={styles.displayName}>{displayName}</Text>
      <Text style={styles.username}>@{username}</Text>

      {bio ? <Text style={styles.bio}>{bio}</Text> : null}
    </View>
  );
}
