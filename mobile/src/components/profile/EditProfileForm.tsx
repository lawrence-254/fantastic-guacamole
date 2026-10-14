
import { useState } from "react";
import {
  Alert,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";
import styles from "./EditProfileForm.styles";

export type ProfileFormValues = {
  displayName: string;
  bio: string;
  avatarUrl: string;
};

type EditProfileFormProps = {
  initialValues: ProfileFormValues;
  onSave: (values: ProfileFormValues) => Promise<void>;
};

export default function EditProfileForm({
  initialValues,
  onSave,
}: EditProfileFormProps) {
  const [displayName, setDisplayName] = useState(initialValues.displayName);
  const [bio, setBio] = useState(initialValues.bio);
  const [avatarUrl, setAvatarUrl] = useState(initialValues.avatarUrl);
  const [saving, setSaving] = useState(false);

  async function handleSave() {
    if (!displayName.trim()) {
      Alert.alert("Required", "Display name cannot be empty.");
      return;
    }

    setSaving(true);

    try {
      await onSave({
        displayName: displayName.trim(),
        bio: bio.trim(),
        avatarUrl: avatarUrl.trim(),
      });
    } catch {
      Alert.alert("Error", "Could not save your profile.");
    } finally {
      setSaving(false);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Display name</Text>
      <TextInput
        style={styles.input}
        value={displayName}
        onChangeText={setDisplayName}
        placeholder="Your display name"
        maxLength={100}
      />

      <Text style={styles.label}>Bio</Text>
      <TextInput
        style={[styles.input, styles.bioInput]}
        value={bio}
        onChangeText={setBio}
        placeholder="Tell people about yourself"
        multiline
        maxLength={500}
      />

      <Text style={styles.label}>Avatar URL</Text>
      <TextInput
        style={styles.input}
        value={avatarUrl}
        onChangeText={setAvatarUrl}
        placeholder="https://example.com/avatar.jpg"
        autoCapitalize="none"
        keyboardType="url"
      />

      <Pressable
        style={[styles.saveButton, saving && styles.disabledButton]}
        onPress={handleSave}
        disabled={saving}
      >
        <Text style={styles.saveButtonText}>
          {saving ? "Saving..." : "Save changes"}
        </Text>
      </Pressable>
    </View>
  );
}
