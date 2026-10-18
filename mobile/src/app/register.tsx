
import { Text, View } from "react-native";
import { Link, useRouter } from "expo-router";

import RegisterForm from "../features/auth/components/RegisterForm";
import { register } from "../features/auth/services/auth-api";
import type { RegisterFormValues } from "../features/auth/types/register.types";
import styles from "../styles/screens/register.styles";

export default function RegisterScreen() {
  const router = useRouter();

  async function handleRegister(values: RegisterFormValues) {
    await register({
      username: values.username,
      email: values.email,
      password: values.password,
      display_name: values.displayName,
    });

    router.replace("/login");
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.brand}>RawReel</Text>
        <Text style={styles.title}>Create your account</Text>
        <Text style={styles.description}>
          Join the community to share videos, stories, and live podcasts.
        </Text>
      </View>

      <RegisterForm onSubmit={handleRegister} />

      <View style={styles.footer}>
        <Text style={styles.footerText}>Already have an account? </Text>
        <Link href="/login" style={styles.link}>
          Sign in
        </Link>
      </View>
    </View>
  );
}
