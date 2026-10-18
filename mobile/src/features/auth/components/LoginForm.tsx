
import { useState } from "react";
import {
  ActivityIndicator,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";

import styles from "./LoginForm.styles";

export type LoginFormValues = {
  email: string;
  password: string;
};

type LoginFormProps = {
  onSubmit: (values: LoginFormValues) => Promise<void>;
};

function getLoginError(error: unknown): string {
  if (!(error instanceof Error)) {
    return "Unable to sign in. Please try again.";
  }

  const message = error.message.toLowerCase();

  if (
    message.includes("401") ||
    message.includes("incorrect email or password") ||
    message.includes("unauthorized")
  ) {
    return "Incorrect email or password. Please try again.";
  }

  if (
    message.includes("network request failed") ||
    message.includes("failed to fetch") ||
    message.includes("networkerror")
  ) {
    return "Cannot connect to RawReel. Check your connection and try again.";
  }

  return error.message || "Unable to sign in. Please try again.";
}

export default function LoginForm({ onSubmit }: LoginFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit() {
    const normalizedEmail = email.trim().toLowerCase();

    if (!normalizedEmail || !password) {
      setError("Enter your email and password.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)) {
      setError("Enter a valid email address.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      await onSubmit({
        email: normalizedEmail,
        password,
      });
    } catch (err) {
      setError(getLoginError(err));
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={(value) => {
          setEmail(value);
          if (error) setError("");
        }}
        placeholder="you@example.com"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        autoComplete="email"
        accessibilityLabel="Email address"
        editable={!loading}
        returnKeyType="next"
      />

      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={(value) => {
          setPassword(value);
          if (error) setError("");
        }}
        placeholder="Enter your password"
        secureTextEntry
        autoCapitalize="none"
        autoComplete="current-password"
        accessibilityLabel="Password"
        editable={!loading}
        returnKeyType="done"
        onSubmitEditing={() => void handleSubmit()}
      />

      {error ? (
        <Text accessibilityRole="alert" style={styles.error}>
          {error}
        </Text>
      ) : null}

      <Pressable
        style={[styles.button, loading && styles.disabledButton]}
        onPress={() => void handleSubmit()}
        disabled={loading}
        accessibilityRole="button"
        accessibilityState={{ disabled: loading, busy: loading }}
      >
        {loading ? (
          <ActivityIndicator color="#FFFFFF" />
        ) : (
          <Text style={styles.buttonText}>Sign in</Text>
        )}
      </Pressable>
    </View>
  );
}
