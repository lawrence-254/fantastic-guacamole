
import { Text, View } from "react-native";
import { Link, useRouter } from "expo-router";

import LoginForm, {
  type LoginFormValues,
} from "../features/auth/components/LoginForm";
import { login } from "../features/auth/services/auth-api";
import styles from "../styles/screens/login.styles";

export default function LoginScreen() {
  const router = useRouter();

  async function handleLogin(values: LoginFormValues) {
    await login(values);
    router.replace("/profile");
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.brand}>RawReel</Text>
        <Text style={styles.title}>Welcome back</Text>
        <Text style={styles.description}>
          Sign in to connect with your community.
        </Text>
      </View>

      <LoginForm onSubmit={handleLogin} />

      <View style={styles.footer}>
        <Text style={styles.footerText}>New to RawReel? </Text>
        <Link href="/register" style={styles.link}>
          Create an account
        </Link>
      </View>
    </View>
  );
}
