
import { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";

import type { RegisterFormValues } from "../types/register.types";
import styles from "./RegisterForm.styles";

type RegisterFormProps = {
  onSubmit: (values: RegisterFormValues) => Promise<void>;
};

export default function RegisterForm({ onSubmit }: RegisterFormProps) {
  const [username, setUsername] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit() {
    if (!username.trim() || !displayName.trim() || !email.trim() || !password) {
      Alert.alert("Missing information", "Please complete every field.");
      return;
    }

    if (username.trim().length < 3) {
      Alert.alert("Invalid username", "Use at least 3 characters.");
      return;
    }

    if (password.length < 8) {
      Alert.alert("Invalid password", "Use at least 8 characters.");
      return;
    }

    setSubmitting(true);

    try {
      await onSubmit({
        username: username.trim(),
        displayName: displayName.trim(),
        email: email.trim().toLowerCase(),
        password,
      });
    } catch (error) {
      Alert.alert(
        "Registration failed",
        error instanceof Error
          ? error.message
          : "Unable to create your account. Please try again.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Username</Text>
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={setUsername}
        placeholder="Choose a username"
        autoCapitalize="none"
        autoCorrect={false}
        maxLength={30}
      />

      <Text style={styles.label}>Display name</Text>
      <TextInput
        style={styles.input}
        value={displayName}
        onChangeText={setDisplayName}
        placeholder="Your display name"
        maxLength={100}
      />

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="you@example.com"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />

      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="At least 8 characters"
        secureTextEntry
        autoCapitalize="none"
        maxLength={128}
      />

      <Pressable
        style={[styles.submitButton, submitting && styles.disabledButton]}
        onPress={handleSubmit}
        disabled={submitting}
      >
        {submitting ? (
          <ActivityIndicator color="#FFFFFF" />
        ) : (
          <Text style={styles.submitButtonText}>Create account</Text>
        )}
      </Pressable>
    </View>
  );
}
