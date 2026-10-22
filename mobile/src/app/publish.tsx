import { useRouter } from "expo-router";
import { StyleSheet } from "react-native";

import { ThemedView } from "@/components/themed-view";
import PublishVideoForm from "@/features/videos/components/PublishVideoForm";

export default function PublishScreen() {
  const router = useRouter();

  return (
    <ThemedView style={styles.container}>
      <PublishVideoForm
        onPublished={() => router.navigate("/explore")}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
