import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";

import { ThemedText } from "../../../components/themed-text";
import type { Video } from "../types/video";
import styles from "./VideoCard.styles";

type VideoCardProps = {
  video: Video;
};

export default function VideoCard({ video }: VideoCardProps) {
  return (
    <View style={styles.card}>
      {video.thumbnail_url ? (
        <Image
          source={{ uri: video.thumbnail_url }}
          style={styles.thumbnail}
          contentFit="cover"
        />
      ) : (
        <View style={styles.thumbnailPlaceholder}>
          <ThemedText>RawReel</ThemedText>
        </View>
      )}

      <View style={styles.details}>
        <ThemedText type="subtitle">{video.title}</ThemedText>
        <ThemedText themeColor="textSecondary">
          @{video.creator.username}
        </ThemedText>

        {video.description ? (
          <ThemedText numberOfLines={3}>{video.description}</ThemedText>
        ) : null}
      </View>
    </View>
  );
}
