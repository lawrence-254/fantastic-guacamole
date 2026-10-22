import { useCallback, useState } from "react";
import { useFocusEffect } from "expo-router";
import {
  ActivityIndicator,
  FlatList,
  Pressable,
  RefreshControl,
  View,
} from "react-native";

import { ThemedText } from "../../../components/themed-text";
import { getVideoFeed } from "../services/video-api";
import type { Video } from "../types/video";
import VideoCard from "./VideoCard";
import styles from "./VideoFeed.styles";

export default function VideoFeed() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadVideos = useCallback(async (refresh = false) => {
    if (refresh) {
      setRefreshing(true);
    } else {
      setLoading(true);
    }

    setError(null);

    try {
      const response = await getVideoFeed();
      setVideos(response.items);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Could not load videos.",
      );
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, []);

  useFocusEffect(
    useCallback(() => {
      void loadVideos();
    }, [loadVideos]),
  );

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#0B6B43" />
        <ThemedText>Loading videos...</ThemedText>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <ThemedText>{error}</ThemedText>
        <Pressable
          style={styles.retryButton}
          onPress={() => void loadVideos()}
        >
          <ThemedText style={styles.retryText}>Try again</ThemedText>
        </Pressable>
      </View>
    );
  }

  return (
    <FlatList
      data={videos}
      keyExtractor={(item) => String(item.id)}
      renderItem={({ item }) => <VideoCard video={item} />}
      contentContainerStyle={[
        styles.listContent,
        videos.length === 0 && styles.emptyList,
      ]}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={() => void loadVideos(true)}
          tintColor="#0B6B43"
        />
      }
      ListEmptyComponent={
        <View style={styles.center}>
          <ThemedText type="subtitle">No videos yet</ThemedText>
          <ThemedText themeColor="textSecondary">
            Videos from the RawReel community will appear here.
          </ThemedText>
        </View>
      }
    />
  );
}
