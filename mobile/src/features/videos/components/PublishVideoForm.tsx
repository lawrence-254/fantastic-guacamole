import { useState } from "react";
import {
  ActivityIndicator,
  Pressable,
  ScrollView,
  TextInput,
  View,
} from "react-native";

import { ThemedText } from "../../../components/themed-text";
import { publishVideo } from "../services/publish-video";
import type { PublishVideoPayload } from "../types/publish";
import styles from "./PublishVideoForm.styles";

type PublishVideoFormProps = {
  onPublished: () => void;
};

export default function PublishVideoForm({
  onPublished,
}: PublishVideoFormProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [thumbnailUrl, setThumbnailUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handlePublish() {
    if (!title.trim() || !videoUrl.trim()) {
      setMessage("Title and video URL are required.");
      return;
    }

    const payload: PublishVideoPayload = {
      title: title.trim(),
      video_url: videoUrl.trim(),
      ...(description.trim()
        ? { description: description.trim() }
        : {}),
      ...(thumbnailUrl.trim()
        ? { thumbnail_url: thumbnailUrl.trim() }
        : {}),
    };

    setLoading(true);
    setMessage("");

    try {
      await publishVideo(payload);
      setTitle("");
      setDescription("");
      setVideoUrl("");
      setThumbnailUrl("");
      setMessage("Video published successfully.");
      onPublished();
    } catch (error) {
      setMessage(
        error instanceof Error ? error.message : "Could not publish video.",
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="handled"
    >
      <ThemedText type="title">Publish a video</ThemedText>
      <ThemedText themeColor="textSecondary">
        Share a video with the RawReel community.
      </ThemedText>

      <View style={styles.field}>
        <ThemedText>Title *</ThemedText>
        <TextInput
          value={title}
          onChangeText={setTitle}
          placeholder="Give your video a title"
          maxLength={150}
          style={styles.input}
        />
      </View>

      <View style={styles.field}>
        <ThemedText>Video URL *</ThemedText>
        <TextInput
          value={videoUrl}
          onChangeText={setVideoUrl}
          placeholder="https://example.com/video.mp4"
          autoCapitalize="none"
          keyboardType="url"
          style={styles.input}
        />
      </View>

      <View style={styles.field}>
        <ThemedText>Description</ThemedText>
        <TextInput
          value={description}
          onChangeText={setDescription}
          placeholder="Tell viewers about your video"
          multiline
          maxLength={5000}
          style={[styles.input, styles.multiline]}
        />
      </View>

      <View style={styles.field}>
        <ThemedText>Thumbnail URL (optional)</ThemedText>
        <TextInput
          value={thumbnailUrl}
          onChangeText={setThumbnailUrl}
          placeholder="https://example.com/thumbnail.jpg"
          autoCapitalize="none"
          keyboardType="url"
          style={styles.input}
        />
      </View>

      {message ? (
        <ThemedText>{message}</ThemedText>
      ) : null}

      <Pressable
        accessibilityRole="button"
        disabled={loading}
        onPress={() => void handlePublish()}
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed,
          loading && styles.buttonDisabled,
        ]}
      >
        {loading ? (
          <ActivityIndicator color="#FFFFFF" />
        ) : (
          <ThemedText style={styles.buttonText}>Publish video</ThemedText>
        )}
      </Pressable>
    </ScrollView>
  );
}
