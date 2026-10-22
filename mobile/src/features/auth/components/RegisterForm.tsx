
import { useState } from "react";
import {
  ActivityIndicator,
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

function getRegistrationError(error: unknown): string {
  if (!(error instanceof Error)) {
    return "Unable to create your account. Please try again.";
  }

  const message = error.message;
  const normalized = message.toLowerCase();

  if (
    normalized.includes("network request failed") ||
    normalized.includes("failed to fetch") ||
    normalized.includes("networkerror")
  ) {
    return "Cannot connect to RawReel. Check your connection and try again.";
  }

  if (
    normalized.includes("already registered") ||
    normalized.includes("already exists") ||
    normalized.includes("already taken") ||
    normalized.includes("duplicate")
  ) {
    return "That username or email may already be in use.";
  }

  if (normalized.includes("422")) {
    return "Some information is invalid. Check your details and try again.";
  }

  return message || "Unable to create your account. Please try again.";
}

export default function RegisterForm({ onSubmit }: RegisterFormProps) {
  const [username, setUsername] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit() {
    const normalizedUsername = username.trim();
    const normalizedDisplayName = displayName.trim();
    const normalizedEmail = email.trim().toLowerCase();

    if (
      !normalizedUsername ||
      !normalizedDisplayName ||
      !normalizedEmail ||
      !password
    ) {
      setError("Please complete every field.");
      return;
    }

    if (!/^[a-zA-Z0-9_]{3,30}$/.test(normalizedUsername)) {
      setError("Username must be 3–30 characters using letters, numbers, or underscores.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)) {
      setError("Enter a valid email address.");
      return;
    }

    if (password.length < 8 || password.length > 128) {
      setError("Password must be between 8 and 128 characters.");
      return;
    }

    setSubmitting(true);
    setError("");

    try {
      await onSubmit({
        username: normalizedUsername,
        displayName: normalizedDisplayName,
        email: normalizedEmail,
        password,
      });
    } catch (err) {
      setError(getRegistrationError(err));
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
        autoComplete="username"
        maxLength={30}
        editable={!submitting}
      />

      <Text style={styles.label}>Display name</Text>
      <TextInput
        style={styles.input}
        value={displayName}
        onChangeText={setDisplayName}
        placeholder="Your display name"
        maxLength={100}
        editable={!submitting}
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
        autoComplete="email"
        editable={!submitting}
      />

      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="At least 8 characters"
        secureTextEntry
        autoCapitalize="none"
        autoComplete="new-password"
        maxLength={128}
        editable={!submitting}
      />

      {error ? (
        <Text accessibilityRole="alert" style={styles.error}>
          {error}
        </Text>
      ) : null}

      <Pressable
        style={[styles.submitButton, submitting && styles.disabledButton]}
        onPress={() => void handleSubmit()}
        disabled={submitting}
        accessibilityRole="button"
        accessibilityState={{ disabled: submitting, busy: submitting }}
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
